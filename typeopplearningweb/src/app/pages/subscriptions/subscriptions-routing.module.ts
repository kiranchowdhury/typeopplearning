import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionContainerComponent } from './subscription-container/subscription-container.component';
import { PurchaseTrainingComponent } from './purchase-training/purchase-training.component';
import { AllowedTrainingComponent } from './allowed-training/allowed-training.component';
import { BudgetComponent } from './budget/budget.component';
import { LoginGuard } from '../../@core/guards/login.guard';
import { PurchaseEquipmentTypeComponent} from './purchase-training/purchase-equipment-type/purchase-equipment-type.component';
import { InvoicesComponent} from './invoices/invoices.component'
import { AllowedTrainingEquipmentTypeComponent } from './allowed-training/allowed-training-equipment-type/allowed-training-equipment-type.component'

const routes: Routes = [{
  path: '',
  component: SubscriptionContainerComponent,
  canActivate: [LoginGuard],
  children: [{
    path: 'purchase',
    component: PurchaseTrainingComponent,
    canActivate: [LoginGuard],
  },  {
    path: 'purchase/:id',
    component: PurchaseEquipmentTypeComponent,
    canActivate: [LoginGuard]
  },{
    path: 'allowedtraining',
    component: AllowedTrainingComponent,
    canActivate: [LoginGuard]
  },{
    path: 'allowedtraining/:id',
    component: AllowedTrainingEquipmentTypeComponent,
    canActivate: [LoginGuard]
  }, {
    path: 'budget',
    component: BudgetComponent,
    canActivate: [LoginGuard]
  }, {
    path: 'invoices',
    component: InvoicesComponent,
    canActivate: [LoginGuard]
  }, {
    path: '',
    redirectTo: 'purchase',
    pathMatch: 'full'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionsRoutingModule { }
