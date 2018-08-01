import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../@models/app-state';
import { TrainingCatState } from '../../subscriptions-state';
import { selectorTrainingCat } from '../../subcriptions-reducer';
import { EquipmentCategoryAllowed } from '../../subscriptions-state';

@Component({
  selector: 'tl-allowed-training-equipment',
  templateUrl: './allowed-training-equipment.component.html',
  styleUrls: ['./allowed-training-equipment.component.scss']
})
export class AllowedTrainingEquipmentComponent implements OnInit {

  urlHash :string;
  equipmentCategoryList: EquipmentCategoryAllowed[];
  constructor(private store : Store<AppState>) { }

  ngOnInit() {
    this.urlHash = window.location.hash;
    //console.log( this.urlHash);
    this.store.select(selectorTrainingCat).subscribe(
      (subcriptionState: TrainingCatState) => {

        //console.log('==============log====================');
       // console.log(subcriptionState.allowedEquipmentCategories);
        this.equipmentCategoryList = subcriptionState.allowedEquipmentCategories;
         //console.log(this.equipmentCategoryList);
      }
    )
  }

}
