import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerContainerComponent } from './customer-container/customer-container.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { LoginGuard } from '../../@core/guards/login.guard';
import { CustomerComponent } from './customer.component';
import { CustomerDataComponent } from './customerlist/customer-data/customer-data.component'
import { CustomerBudgetDetailComponent } from './customerlist/customer-data-detail/customer-budget-detail/customer-budget-detail.component'
import { CustomerUserComponent} from './customerlist/customer-data-detail/customer-user/customer-user.component'

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: '',
        component: CustomerContainerComponent
      },{
        path: ':id/:name',
        component: CustomerDataComponent
      },{
        path: ':id/detail',
        component: CustomerBudgetDetailComponent
      },{
        path: ':id/user-list',
        component: CustomerUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
