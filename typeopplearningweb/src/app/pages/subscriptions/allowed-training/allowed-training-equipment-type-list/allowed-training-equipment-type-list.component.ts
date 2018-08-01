import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../@models/app-state';
import { EquipmentDetail, TrainingCatState} from  './../../subscriptions-state';
import { selectorTrainingCat } from '../../subcriptions-reducer';

@Component({
  selector: 'tl-allowed-training-equipment-type-list',
  templateUrl: './allowed-training-equipment-type-list.component.html',
  styleUrls: ['./allowed-training-equipment-type-list.component.scss']
})
export class AllowedTrainingEquipmentTypeListComponent implements OnInit {
  showManufacturer = false;
  equipmentTypes : any = [];
  loading: boolean = false;
  loadingMsg: string = '';
  //equipmentDetail: EquipmentDetail[];
  equipmentCategory : EquipmentDetail;
  equipmentData : EquipmentDetail[];
  equipmentDetails : EquipmentDetail[];
  equipmentManufactor : any[] = [];
  equipmentModels : any[] = [];
  pathHash: string;
  selectedEquipmentType: string;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.showManufacturer = false;
    this.pathHash = window.location.hash;
    this.store.select(selectorTrainingCat).subscribe(
      (subscription : TrainingCatState) =>{
        this.equipmentDetails = subscription.equipmentDetails;
        console.log(this.equipmentDetails);
        this.filterEquipmentTypes(this.equipmentDetails);
        if(this.equipmentDetails)
          this.equipmentCategory = this.equipmentDetails[0];
      }
    )

  }

  filterEquipmentTypes(equipmentDetailList : EquipmentDetail[]){
    //console.log('==========in filter=========='+equipmentDetailList);
    //console.log(this.equipmentDetails);
    this.equipmentTypes = [];
    if(equipmentDetailList){
      for(let i=0; i<equipmentDetailList.length; i++){
        let equipmentType = equipmentDetailList[i].equipmentType;
        let flag = false;
        for(let j=0; j<this.equipmentTypes.length; j++){
          if(this.equipmentTypes[j].equipmentType === equipmentType){
            flag = true;
          }
        }
        if(!flag){
          this.equipmentTypes.push({equipmentType : equipmentDetailList[i].equipmentType} )
        }

      }

    }

    //console.log(this.equipmentTypes);
  }

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

  showManufacture (equipmentType){
    this.equipmentManufactor = [];
    if(this.showManufacturer){
      this.showManufacturer = false;

    }else{
      this.showManufacturer = true;
      this.selectedEquipmentType = equipmentType.equipmentType;
      if(this.equipmentDetails){
        for(let i=0; i<this.equipmentDetails.length; i++){
          if(equipmentType.equipmentType === this.equipmentDetails[i].equipmentType){

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
    this.showManufacturer = false;
      this.selectedEquipmentType = '';
  }

}
