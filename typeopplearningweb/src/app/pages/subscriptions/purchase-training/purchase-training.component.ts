import { selectorTrainingCat, GetTrainingCategoryAction } from './../subcriptions-reducer';
import { AppState } from './../../../@models/app-state';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { TrainingCat, TrainingCatState, EquipmentCategory } from '../subscriptions-state';
import { GetTrainingLibraryAction, selectorTrainingLibrary } from '../../training-library/training-library-reducer';
import { TrainingLibraryState, TrainingLibrary } from '../../training-library/training-library-state';

@Component({
  selector: 'tl-purchase-training',
  templateUrl: './purchase-training.component.html',
  styleUrls: ['./purchase-training.component.scss']
})
export class PurchaseTrainingComponent implements OnInit {
  trainingCategory: TrainingCat[];
  pathHashArray : string[];
  breadcrumbs = [];
  selectedEquipment : string;
  urlHash :string;
  libraryList : Array<EquipmentCategory> = [];
  trainingDetailsList?: TrainingLibrary[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.urlHash = window.location.hash;
    var pathHash = window.location.hash;
    this.libraryList = [];
    console.log(pathHash);
    this.pathHashArray = pathHash.split("/");
    console.log(this.pathHashArray);
    var link = "";
    for(var i=2; i<this.pathHashArray.length; i++){

      var active =false;
      if(i==2){
        link = "/"+this.pathHashArray[i-1]+"/"+this.pathHashArray[i];
      }else{
        link= link+"/"+this.pathHashArray[i];
      }

      if(i==this.pathHashArray.length-1){
        this.selectedEquipment = this.pathHashArray[i].split("-").join(" ");
        active=true;
      }
      this.breadcrumbs.push({name: this.pathHashArray[i],
      link: link,
      active: active,})
    }
    this.store.select(selectorTrainingCat).subscribe(
      (trainingCatState: TrainingCatState) => {
        this.trainingDetailsList = trainingCatState.trainingDetailsList;
        this.filterCategories(this.trainingDetailsList);
      }
    )
    this.store.dispatch(new GetTrainingCategoryAction());
    // this.store.dispatch(new GetTrainingLibraryAction());
    // this.store.select(selectorTrainingLibrary).subscribe(
    //   (trnLibState: TrainingLibraryState) => {
    //     this.libraryList = this.filterCategories(trnLibState.trainingLibraries);
    //   }
    // )
  }

  filterCategories(trainingDetailsList: TrainingLibrary[]) {
    // var returnList: EquipmentCategory[] = [];
    // console.log('====filter list=======', trainingDetailsList.length);
    // trainingDetailsList.filter((trainingDetails)=>{
    //   console.log('====tarinains===', trainingDetails);
    //   return trainingDetails;
    // })
    if(trainingDetailsList){
    for(let i=0; i<trainingDetailsList.length; i++){
      let category = trainingDetailsList[i].equipmentCategory;
      let flag = false;
      if(this.libraryList){
      for(let j=0; j<this.libraryList.length; j++){
        if(this.libraryList[j].equipmentCategory === category){
          flag = true;
        }
      }
    }
      if(!flag){
        if(typeof(this.libraryList) === 'undefined'){
          this.libraryList = [];
        }
        this.libraryList.push({
          equipmentCategory: trainingDetailsList[i].equipmentCategory,
          id: trainingDetailsList[i]._id,
          equipmentIcon: trainingDetailsList[i].equipmentIcon
        })
      }

    }
  }
}
}
