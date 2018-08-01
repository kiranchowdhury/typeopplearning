import { AppState } from './../../../../@models/app-state';
import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { selectorUserList, GetTrainingStatusAction, UpdateUserTrainingAction} from './../../user-list-reducer';
import { UserTrainingStatus, UserListState, EmployeeTraining } from '../../user-list-state';
import { NgbModal } from '../../../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { UpdateDialogComponent } from '../../../update-dialog/update-dialog.component';

@Component({
  selector: 'tl-user-training-status',
  templateUrl: './user-training-status.component.html',
  styleUrls: ['./user-training-status.component.scss']
})
export class UserTrainingStatusComponent implements OnInit {

  gridApi;
  gridColumnApi;
  columnDefs;
  defaultColumnDef;
  gridoptions;
  userTrnData : UserTrainingStatus;
  loading: boolean = false;
  loadingMsg: string = '';
  userTrainings: EmployeeTraining[];
  selectedTraining : EmployeeTraining;

  constructor(private store : Store<AppState>,
    private modelService : NgbModal) {
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


  }
  ngOnInit() {
    this.store.select(selectorUserList).subscribe(
      (userState: UserListState) => {
        this.userTrainings = userState.userTrainings;
        //this.userTrainings[0]._id
      }
    );
  }

  openUpdateDialog(training){
    console.log('===================into update dialog=============='+training._id);
    this.selectedTraining = training;
    console.log(this.selectedTraining);
    const activeModel = this.modelService.open(UpdateDialogComponent);
    activeModel.componentInstance.header = "Update User Training Detail";
    activeModel.componentInstance.modelMessage = "Update user training detail to COMPLETED status and generate certificate for training.";
    activeModel.componentInstance.componet = this;
    activeModel.componentInstance.updateItem = training;
    activeModel.componentInstance.btnlabel = 'Complete';
  }

  updateUserTraining(training){
    console.log('into final update======'+training);
    console.log(training);
    this.store.dispatch(new UpdateUserTrainingAction({training : training}));
    this.store.select(selectorUserList).subscribe(
      (userState: UserListState) => {
        this.selectedTraining = userState.updateUserTraining;
        console.log(this.selectedTraining);
        if(this.selectedTraining){
          training.status = this.selectedTraining.status;
        }
      }
    );

  }

}
