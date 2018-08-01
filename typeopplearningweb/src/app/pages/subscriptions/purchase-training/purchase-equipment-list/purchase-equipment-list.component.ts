import { AppState } from './../../../../@models/app-state';
import { Store } from '@ngrx/store';
import { Component, Input, OnInit, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { selectorTrainingCat, GetEquipmentTypeListAction, GetEquipmentTypeDataListAction, PurchaseTrainingAction} from './../../subcriptions-reducer';
import { TrainingCatState, EquipmentType, EquipmentData } from '../../subscriptions-state';
import { FormGroup, FormControl } from '@angular/forms';
import { TrainingLibrary } from '../../../training-library/training-library-state';
import { TrainingDetails } from '../../../user-list/user-list-state';

@Component({
  selector: 'tl-purchase-equipment-list',
  templateUrl: './purchase-equipment-list.component.html',
  styleUrls: ['./purchase-equipment-list.component.scss']
})
export class PurchaseEquipmentListComponent implements OnInit {

  equipmentType : EquipmentType[];
  equipmentData : EquipmentData[];
  equipmentCategogy : TrainingLibrary;
  @Input() trainingId: string;
  constructor(private store : Store<AppState>) { }
  form: FormGroup ;
  loading: boolean = false;
  loadingMsg: string = '';
  trainingDetailsList?: TrainingLibrary[] = [];
  //filterTrainingDetailsList?: TrainingLibrary[] = [];
  trainingDetails : TrainingLibrary[] = [];
  equipmentManufactor : any[] = [];
  equipmentTypeStr: string ;
  showManufacturer = false;
  selectedEquipmentType : string;
  removable: boolean = true;

  ngOnInit() {
    // this.store.select(selectorTrainingCat).subscribe(
    //   (equipmentTypeState: TrainingCatState) => {
    //     //console.log("Equipment state 222", equipmentTypeState);
    //     this.equipmentType =equipmentTypeState.equipmentType;
    //   }
    // )
    this.showManufacturer = false;
    this.store.select(selectorTrainingCat).subscribe(
      (trainingCatState: TrainingCatState) => {
        this.trainingDetailsList = trainingCatState.trainingDetailsList;
        this.equipmentTypeStr = this.trainingDetailsList.filter(training => {return training._id === this.trainingId})[0].equipmentType;
        this.filterTrainingTypes(this.trainingDetailsList);
        this.loading = trainingCatState.loading;
        this.equipmentCategogy = this.trainingDetailsList[0];
      }
    );
  }

  filterTrainingTypes(trainingDetailsList: TrainingLibrary[]) {
    this.equipmentType = [];
    if(trainingDetailsList){
    for(let i=0; i<trainingDetailsList.length; i++){
      let equipType = trainingDetailsList[i].equipmentType;
      let flag = false;
      if(this.equipmentType){
      for(let j=0; j<this.equipmentType.length; j++){
        if(this.equipmentType[j].equipmentType === equipType){
          flag = true;
        }
      }
    }
      if(!flag){
        if(typeof(this.equipmentType) === 'undefined'){
          this.equipmentType = [];
        }
        this.equipmentType.push({
          equipmentType: trainingDetailsList[i].equipmentType,
          id: trainingDetailsList[i]._id
        })
      }

    }
  }
}

  getTrainings = (equip) => {
    console.log(equip);
    //this.filterTrainingDetailsList = this.trainingDetailsList.filter((training)=>{return training.equipmentType === equipType});
    this.trainingDetails = [];
    if(this.trainingDetailsList){
      for(let i=0; i<this.trainingDetailsList.length; i++){
        let flag = false;

        if(this.trainingDetailsList[i].manufacturer === equip.equipmentManufact){
          flag = true;
        }

        if(flag){
          this.trainingDetails.push(this.trainingDetailsList[i]);
        }

      }

    }
  }

  purchaseTraining = (training: TrainingLibrary)=>{
    console.log(training);
    this.store.dispatch(new PurchaseTrainingAction({id: training._id}));
  }

  showManufacture(equipType){
    this.equipmentManufactor = [];
    if(this.showManufacturer){
      this.showManufacturer = false;

    }else{
      this.showManufacturer = true;
      this.selectedEquipmentType = equipType.equipmentType;
      if(this.trainingDetailsList){
        for(let i=0; i<this.trainingDetailsList.length; i++){
          if(equipType.equipmentType === this.trainingDetailsList[i].equipmentType){

            let manufacturer = this.trainingDetailsList[i].manufacturer;
            let flag = false;
            for(let j=0; j<this.equipmentManufactor.length; j++){
              if(this.equipmentManufactor[j].equipmentManufact === manufacturer){
                flag = true;
              }
            }
            if(!flag){
              this.equipmentManufactor.push({
                equipmentManufact : this.trainingDetailsList[i].manufacturer
              })
            }

          }


        }

      }
    }
  }

  showEquipmentType(){
    this.showManufacturer = false;
    this.selectedEquipmentType = "";
  }

}
