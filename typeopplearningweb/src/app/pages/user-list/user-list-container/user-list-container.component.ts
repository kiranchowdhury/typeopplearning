import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../@models/app-state';
import { Store } from '@ngrx/store';
import { User } from '../../../@core/auth/auth.state';
import { GetUserListAction, GetUserListActionSuccess, GetUserListActionFailed, selectorUserList } from '../user-list-reducer'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewUserComponent } from '../new-user/new-user.component';
import { ViewChild } from '@angular/core';
import { UserListTableComponent } from '../user-list-table/user-list-table.component';
import { UserListState } from '../user-list-state';

@Component({
  selector: 'tl-user-list-container',
  templateUrl: './user-list-container.component.html',
  styleUrls: ['./user-list-container.component.scss']
})
export class UserListContainerComponent implements OnInit {

  @ViewChild(UserListTableComponent) userListComponent: UserListTableComponent;
  loading: boolean = false;
  loadingMsg: string = '';
  mode: string = 'view';

  constructor(private store: Store<AppState>,
  private modalService: NgbModal) { }

  ngOnInit() {
    this.store.dispatch( new GetUserListAction() );
    this.store.select( selectorUserList ).subscribe(
      (userListState: UserListState) => {
        this.loading = userListState.loading;
        this.loadingMsg = userListState.loadingMsg;
        if(userListState.saved){
          this.mode = 'view';
        }
      }
    )
  }

  toggleMode() {
    this.mode = this.mode === 'view' ? 'edit' : 'view';
  }

  onUserRemoveCallback = (user: User) => {
    console.log('from container-',user);
  }

  openNewUserDialog() {
    const userDialog = this.modalService.open(NewUserComponent, {});
  }

  saveClick() {
    this.userListComponent.saveUserList();
  }
}
