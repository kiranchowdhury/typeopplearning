import { AppState } from './../../../@models/app-state';
import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { selectorTraining } from '../training-reducer';
import { TrainingState, EquipmentCategory } from '../training-state';

@Component({
  selector: 'tl-training-equipment',
  templateUrl: './training-equipment.component.html',
  styleUrls: ['./training-equipment.component.scss']
})
export class TrainingEquipmentComponent implements OnInit {

  urlHash :string;
  @ViewChild('nameedit') nameElement: ElementRef;
  equipmentCategoryList: EquipmentCategory[];
  constructor(private store : Store<AppState>) { }


  ngOnInit() {
    this.urlHash = window.location.hash;
    //console.log( this.urlHash);
    this.store.select(selectorTraining).subscribe(
      (trainingState: TrainingState) => {
        //console.log(trainingState);
        this.equipmentCategoryList = trainingState.equipmentCategories;
      }
    )
  }

}
