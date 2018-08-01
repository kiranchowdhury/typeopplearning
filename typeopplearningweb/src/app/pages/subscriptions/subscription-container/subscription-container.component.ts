import { AppState } from './../../../@models/app-state';
import { Store } from '@ngrx/store';
import { TrainingCat, TrainingCatState } from './../subscriptions-state';
import { Component, OnInit } from '@angular/core';
import { selectorTrainingCat, GetTrainingCategoryAction } from '../subcriptions-reducer';

@Component({
  selector: 'tl-subscription-container',
  template: `
  <router-outlet></router-outlet>
`,
})
export class SubscriptionContainerComponent implements OnInit {

  loading: boolean = false;
  loadingMsg: string = '';
  trainingCategory: TrainingCat[];

  constructor(private store: Store<AppState>) { }


  ngOnInit() {
    // this.store.dispatch(new GetTrainingCategoryAction());
  }

}
