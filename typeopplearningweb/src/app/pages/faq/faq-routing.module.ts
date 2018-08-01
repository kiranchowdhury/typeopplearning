import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqContainerComponent } from './faq-container/faq-container.component';
import { LoginGuard } from '../../@core/guards/login.guard';
const routes: Routes = [{
    path: '',
    component: FaqContainerComponent,
    canActivate: [LoginGuard],
    children: []
  }];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class FaqRoutingModule{ }