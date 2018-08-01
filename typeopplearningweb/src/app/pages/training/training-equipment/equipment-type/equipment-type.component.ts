import { Component, OnInit } from '@angular/core';
import { AppState } from './../../../../@models/app-state';
import { Store } from '@ngrx/store';
import { FormGroup, } from '@angular/forms';
import { GetEquipmentCategoryNameAction, selectorTraining, GetEquipmentTypeListAction} from './../../training-reducer';
import { Breadcrumb } from '../../../../@theme/components/breadcrumb/breadcrumb';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { TrainingState, EquipmentCategory } from '../../training-state';

@Component({
  selector: 'tl-equipment-type',
  templateUrl: './equipment-type.component.html',
  styleUrls: ['./equipment-type.component.scss']
})
export class EquipmentTypeComponent implements OnInit {
  pathHashArray : string[];
  breadcrumbs: Breadcrumb[] = [{name: 'Training', link: '/pages/trainings', active: false}];
  training: {_id: string; name: string};
  routeParamSubscription: Subscription;
 // equipmentCategory : EquipmentCategory;
  loading: boolean = false;
  loadingMsg: string = '';
  categoryNameReq : string;

  constructor(private store: Store<AppState>, private activaRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log('=========into the type====');

    this.training = {
      _id: this.activaRoute.snapshot.params['id'],
      name: this.activaRoute.snapshot.params['name']
    }/*
    this.routeParamSubscription = this.activaRoute.params
      .subscribe(
        (params: Params) => {
          this.training._id = params['id'];
          this.training.name = params['name'];
        }
      );
      this.breadcrumbs.push({

        name: this.training.name,
        link: '/pages/trainings/'+this.training._id+'/'+this.training.name,
        active: true
      }); */
      this.activaRoute.params.subscribe(params => {
        console.log(params);
        this.training._id = params['id'];

     });

      this.categoryNameReq = this.training._id;

      //console.log('on dispatch=======');
      /* this.store.dispatch(new GetEquipmentCategoryNameAction( {trainingId : this.categoryNameReq}));
      this.store.select(selectorTraining).subscribe(
        (trainingState: TrainingState) => {
          //console.log(trainingState);
          this.equipmentCategory= trainingState.equipmentCategory;
          //console.log(this.equipmentCategory);

        }

      ) */
      this.store.dispatch(new GetEquipmentTypeListAction({trainingId : this.categoryNameReq}));


      /* this.breadcrumbs.push({

        name: this.equipmentCategory.categoryName,
        link: '/pages/trainings/'+this.categoryNameReq,
        active: true
      }); */

  }


}
