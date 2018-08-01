import { selectorTrainingCat } from './../subcriptions-reducer';
import { AppState } from './../../../@models/app-state';
import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { Invoice, TrainingCatState } from '../subscriptions-state';
import { GridOptions } from 'ag-grid';


@Component({
  selector: 'tl-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {

  invoices: Invoice[];
  @ViewChild('nameedit') nameElement: ElementRef;
  gridApi;
  gridColumnApi;
  columnDefs;
  defaultColumnDef;
  gridoptions;

  constructor(private store: Store<AppState>) {

    this.gridoptions = <GridOptions>{
      rowHeight: 40,
      headerHeight: 40
    }
    this.columnDefs = [{
      headerName: "Invoice Number",
      width: 200,
      field: 'invoiceNumber',
    }, {
      headerName: "Invoice Date",
      width: 200,
      field: "invoiceDate"
    }, {
      headerName: 'Invoice Total',
      width: 200,
      field: 'invoiceTotal'
    },{
      headerName: "Due Date",
      width: 200,
      field: 'dueDate',
    }, {
      headerName: "Status",
      width: 200,
      field: "status"
    },{
      headerName: "",
      width: 200,
      field: "invoiceNumber"
    }];
    this.defaultColumnDef = {
      editable: true,
      enableRowGroup: false,
      enablePivot: false,
      enableValue: true
    };  

  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.store.select(selectorTrainingCat).subscribe(
      (invoiceState: TrainingCatState) => {
        this.invoices = invoiceState.invoiceList;
        console.log("invoices", this.invoices);
        params.api.setRowData(invoiceState.invoiceList);
      }
    )
    /* this.store.select(selectorCustomers).subscribe(
      (custState: CustomersState) => {
        this.customers = custState.customers;
        console.log("CUSTOMERS", this.customers);
        params.api.setRowData(custState.customers);
      }
    ) */
  }
  
  ngOnInit() {
    this.store.select(selectorTrainingCat).subscribe(
      (invoiceState: TrainingCatState) => {
        this.invoices = invoiceState.invoiceList;
        console.log("invoices", this.invoices);
      }
    )
  }
}
