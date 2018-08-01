import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';
import { UserListComponent} from './user-list-component';
import { LoginGuard } from '../../@core/guards/login.guard';
import { UserDetailComponent} from './user-list-table/user-detail/user-detail.component';

const routes: Routes = [{
  path: '',
  component: UserListComponent,
  canActivate: [LoginGuard],
  children: [
    {
      path: '',
      component: UserListContainerComponent
  },
    {
      path: ':id',
      component: UserDetailComponent
  } 
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserListRoutingModule { }
