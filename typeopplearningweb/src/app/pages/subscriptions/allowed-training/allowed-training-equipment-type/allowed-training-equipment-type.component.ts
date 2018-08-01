import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../@models/app-state';
import { ActivatedRoute } from '@angular/router';
import { AllowedTrainingDetailAction } from '../../subcriptions-reducer';

@Component({
  selector: 'tl-allowed-training-equipment-type',
  templateUrl: './allowed-training-equipment-type.component.html',
  styleUrls: ['./allowed-training-equipment-type.component.scss']
})
export class AllowedTrainingEquipmentTypeComponent implements OnInit {

  trainingId: string;
  loading: boolean = false;
  loadingMsg: string = '';
  constructor(private store : Store<AppState>, private activaRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activaRoute.params.subscribe(params => {
      console.log(params);
      this.trainingId =  params['id'];
      console.log(this.trainingId);

      this.store.dispatch(new AllowedTrainingDetailAction({trainingId : this.trainingId}));
   });

  }

}
