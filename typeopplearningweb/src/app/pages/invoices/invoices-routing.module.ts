import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceContainerComponent } from './invoice-container/invoice-container.component';
import { LoginGuard } from '../../@core/guards/login.guard';

const routes: Routes = [{
  path: '',
  component: InvoiceContainerComponent,
  canActivate: [LoginGuard],
  children: []
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule { }