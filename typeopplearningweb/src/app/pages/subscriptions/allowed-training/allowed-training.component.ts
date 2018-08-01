import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../@models/app-state';
import {AllowedTrainingCategoryAction} from '../subcriptions-reducer';

@Component({
  selector: 'tl-allowed-training',
  templateUrl: './allowed-training.component.html',
  styleUrls: ['./allowed-training.component.scss']
})
export class AllowedTrainingComponent implements OnInit {

  constructor(private store : Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new AllowedTrainingCategoryAction)

  }

}
