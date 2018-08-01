import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../../../@models/app-state'
import { Invoice, InvoiceState } from './../invoices-state';
import { selectorInvoice, GetInvoiceListAction } from '../invoices-reducer';

@Component({
  selector: 'tl-invoice-container',
  templateUrl: './invoice-container.component.html',
  styleUrls: ['./invoice-container.component.scss']
})
export class InvoiceContainerComponent implements OnInit {

  loading: boolean = false;
  loadingMsg: string = '';
  invoices: Invoice[];
  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.store.dispatch(new GetInvoiceListAction());
  }


 
}
