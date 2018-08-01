import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../@models/app-state';
import { selectorCustomers, GetCustomerBudgetDetailAction } from '../../../customers.reducer';
import { CustomersState, RemainingBudget, BudgetDetail } from '../../../customers-state';
import { GridOptions } from 'ag-grid';

@Component({
  selector: 'tl-customer-budget-table',
  templateUrl: './customer-budget-table.component.html',
  styleUrls: ['./customer-budget-table.component.scss']
})
export class CustomerBudgetTableComponent implements OnInit {

  remainingBudget : RemainingBudget;
  budgetDetail : BudgetDetail[];
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
      headerName: "Description",
      width: 400,
      field: 'description',
    }, {
      headerName: "Type",
      width: 400,
      field: "type"
    }, {
      headerName: 'Date',
      width: 200,
      field: 'date'
    },{
      headerName: 'Amount',
      width: 200,
      field: 'amount'
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
    this.store.select(selectorCustomers).subscribe(
      (custState: CustomersState) => {
        this.budgetDetail = custState.budgetDetail;
        //console.log("CUSTOMERS Budget Detail=========", this.budgetDetail);
      }
    )
  }

  ngOnInit() {
    this.store.select(selectorCustomers).subscribe(
      (custState: CustomersState) => {
        this.remainingBudget = custState.remainingBudget;
        this.budgetDetail = custState.budgetDetail;
        //console.log("CUSTOMERS Budget Detail=========", this.budgetDetail);
      }
    )
  }

}
