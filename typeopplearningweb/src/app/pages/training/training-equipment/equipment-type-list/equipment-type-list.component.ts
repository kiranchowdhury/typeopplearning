import { AppState } from './../../../../@models/app-state';
import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { LoginState } from './../../../../@core/login/login.state';
import { selectorTraining, GetEquipmentTypeListAction, GetEquipmentTypeDataListAction} from './../../training-reducer';
import { TrainingState, EquipmentType, EquipmentData } from '../../training-state';
import { FormGroup, FormControl } from '@angular/forms';
import { selectorLogin } from './../../../../@core/login/login.reducer';

@Component({
  selector: 'tl-equipment-type-list',
  templateUrl: './equipment-type-list.component.html',
  styleUrls: ['./equipment-type-list.component.scss']
})
export class EquipmentTypeListComponent implements OnInit {
  equipmentCategory : EquipmentData;
  equipmentType : EquipmentType[] = [];
  equipmentData : EquipmentData[];
  equipmentDetails : EquipmentData[];
  equipmentManufactor : any[] = [];
  equipmentModels : any[] = [];
  currentUser: LoginState;
  constructor(private store : Store<AppState>) { }
  form: FormGroup ;
  loading: boolean = false;
  loadingMsg: string = '';
  pathHash: string;
  showManufacturer = false;
  selectedEquipmentType = '';

  ngOnInit() {

    this.pathHash = window.location.hash;
    this.equipmentType = [];
    this.store.select(selectorTraining).subscribe(
      (equipmentTypeState: TrainingState) => {
        //console.log("Equipment state 222", equipmentTypeState);
        this.equipmentDetails =equipmentTypeState.equipmentDetails;
        /* console.log('=============into the equipment detail get==================');
        console.log(this.equipmentDetails); */
        if(this.equipmentDetails)
          this.equipmentCategory = equipmentTypeState.equipmentDetails[0];
        this.filterEquipmentTypes(this.equipmentDetails);
      }

    )
    this.store.select(selectorLogin).subscribe(
      (loginState: LoginState) => {
        this.currentUser = loginState;
        console.log('role: ',this.currentUser.role);
        //console.log('===============in 1=============='+loginState);
      }
    )

  }

  filterEquipmentTypes(equipmentDetailList : EquipmentData[]){
    //console.log('==========in filter=========='+equipmentDetailList);
    this.equipmentType = [];
    if(equipmentDetailList){
      for(let i=0; i<equipmentDetailList.length; i++){
        let equipmentType = equipmentDetailList[i].equipmentType;
        let flag = false;
        for(let j=0; j<this.equipmentType.length; j++){
          if(this.equipmentType[j].equipmentType === equipmentType){
            flag = true;
          }
        }
        if(!flag){
          this.equipmentType.push({
            equipmentType : equipmentDetailList[i].equipmentType
          })
        }

      }

    }

    //console.log(this.equipmentType);
  }

  /* getEquipData = (equipType) => {

    this.store.dispatch(new GetEquipmentTypeDataListAction({equipmentType : equipType.equipmentType}));
    this.store.select(selectorTraining).subscribe(
      (equipmentTypeState: TrainingState) => {

        this.equipmentData =equipmentTypeState.equipmentData;

      }
    )
  } */

  getEquipModel = (manufactor)=>{
    //console.log(manufactor);
    this.equipmentModels = [];
    if(this.equipmentDetails){
      for(let i=0; i<this.equipmentDetails.length; i++){
       let flag = false;

        if(this.equipmentDetails[i].manufacturer === manufactor.equipmentManufact){
          flag = true;
        }

        if(flag){
          this.equipmentModels.push({
            equipmentModel : this.equipmentDetails[i].model,
            _id : this.equipmentDetails[i]._id
          })
        }

      }

    }
  }

  getStartTraining= (equip)=>{
    console.log(equip);
  }
  showManufacture (equipmentType){
    this.equipmentManufactor = [];
    this.selectedEquipmentType = equipmentType.equipmentType;
    if(this.showManufacturer){
      this.showManufacturer = false;

    }else{
      this.showManufacturer = true;
      if(this.equipmentDetails){
        for(let i=0; i<this.equipmentDetails.length; i++){
          if(equipmentType.equipmentType == this.equipmentDetails[i].equipmentType){

            let manufacturer = this.equipmentDetails[i].manufacturer;
            let flag = false;
            for(let j=0; j<this.equipmentManufactor.length; j++){
              if(this.equipmentManufactor[j].equipmentManufact === manufacturer){
                flag = true;
              }
            }
            if(!flag){
              this.equipmentManufactor.push({
                equipmentManufact : this.equipmentDetails[i].manufacturer
              })
            }

          }

        }

      }
    }

  }

  showEquipmentType(){
    this.selectedEquipmentType = "";
    this.showManufacturer = false;
  }

}
