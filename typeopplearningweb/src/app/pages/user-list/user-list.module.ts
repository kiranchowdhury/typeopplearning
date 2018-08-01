import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';
import { UserListSearchComponent } from './user-list-search/user-list-search.component';
import { UserListTableComponent } from './user-list-table/user-list-table.component';
import { SharedModule } from '../../@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { userListReducer } from './user-list-reducer';
import { UserListEffects } from './user-list-effects'
import { EffectsModule } from '@ngrx/effects';
import { NewUserComponent } from './new-user/new-user.component';
import { UserListComponent} from './user-list-component';
import { UserDetailComponent } from './user-list-table/user-detail/user-detail.component';
import { UserDetailDataComponent } from './user-list-table/user-detail-data/user-detail-data.component';
import { UserTrainingStatusComponent } from './user-list-table/user-training-status/user-training-status.component';
import { RemoveDialogComponent } from '../remove-dialog/remove-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserFilter } from './user.filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    UserListRoutingModule,
    SharedModule,
    StoreModule,
    NgbModule,
    StoreModule.forFeature ('userList', {
      userListState: userListReducer
    }),
    EffectsModule.forFeature([UserListEffects])
  ],
  declarations: [UserListComponent, UserListContainerComponent, UserListSearchComponent, UserListTableComponent, UserDetailComponent, UserDetailDataComponent, UserTrainingStatusComponent, UserFilter],
  entryComponents: []
})
export class UserListModule { }
