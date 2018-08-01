import { AppState } from './../../../../@models/app-state';
import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { selectorUserList, GetUserDetailAction, GetTrainingStatusAction} from './../../user-list-reducer';
import { UserDetailData, UserListState, User, EmployeeTraining } from '../../user-list-state';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tl-user-detail-data',
  templateUrl: './user-detail-data.component.html',
  styleUrls: ['./user-detail-data.component.scss']
})
export class UserDetailDataComponent implements OnInit {
  userDetails : User ;
  loading: boolean = false;
  loadingMsg: string = '';
  employeeId: string;

  constructor(private store : Store<AppState>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.employeeId = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new GetUserDetailAction({id: this.employeeId}));
    this.store.dispatch(new GetTrainingStatusAction({id: this.employeeId}));

    this.store.select(selectorUserList).subscribe(
      (userState: UserListState) => {
        this.userDetails = userState.userDetail;
      }
    );


  }

}
