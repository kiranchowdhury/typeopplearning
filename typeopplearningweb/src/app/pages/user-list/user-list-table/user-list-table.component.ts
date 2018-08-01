import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user-list-state';
import { Store } from '@ngrx/store';
import { AppState } from '../../../@models/app-state';
import { selectorUserList, RemoveUserAction, SaveUserListAction } from '../user-list-reducer';
import { UserListState } from '../user-list-state';
import { NewUserComponent } from '../new-user/new-user.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RemoveDialogComponent } from '../../remove-dialog/remove-dialog.component';

@Component({
  selector: 'tl-user-list-table',
  templateUrl: './user-list-table.component.html',
  styleUrls: ['./user-list-table.component.scss']
})
export class UserListTableComponent implements OnInit {

  @Input() mode: string;
  @Input() searchText: string;
  @Output() removeUserEvent: EventEmitter<User> = new EventEmitter();
  pathHsh: string;
  userList: User[];
  changesRefUserList: User[] = [];

  constructor(private store: Store<AppState>,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.pathHsh = window.location.hash;
    this.store.select( selectorUserList ).subscribe(
      (userListState: UserListState) => {
        this.userList = userListState.userList;
        console.log('===saved===', userListState.saved);
        if(userListState.saved){
          this.mode = 'view';
        }
      }
    )
  }

  trackChange($event, employee) {
    let matches: boolean = false;
    this.changesRefUserList.forEach( user => {
      if(user._id === employee._id){
        matches = true;
      }
    });
    if( !matches ){
      this.changesRefUserList.push(employee);
    }
    // console.log('changed list========'+this.changesRefTrainingList);
  }

  onRemoveUser = (user: User) => {
    console.log('from list table ', user);
    // this.store.dispatch(new RemoveUserAction({user: user}));
    // this.removeUserEvent.emit(user);
    const activeModal = this.modalService.open(RemoveDialogComponent,{});
    activeModal.componentInstance.header = 'Remove User';
    activeModal.componentInstance.modalMessage = 'Are you sure want to delete User';
    activeModal.componentInstance.component = this;
    activeModal.componentInstance.deleteItem = user;
  }

  finalRemove(user: User) {
    this.store.dispatch(new RemoveUserAction({user: user}));
  }

  saveUserList() {
    this.store.dispatch( new SaveUserListAction({users: this.changesRefUserList}) )
  }

}
