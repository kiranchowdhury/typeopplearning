import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../../../@models/app-state'
import { TrainingCatState, Invoice } from './../subscriptions-state';
import { selectorTrainingCat, GetInvoiceListAction } from '../subcriptions-reducer';

@Component({
  selector: 'tl-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  loading: boolean = false;
  loadingMsg: string = '';
  invoices: Invoice[];
  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.store.dispatch(new GetInvoiceListAction());
  }

}
