import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingLibContainerComponent } from './training-lib-container/training-lib-container.component';
import { LoginGuard } from '../../@core/guards/login.guard';

const routes: Routes = [{
  path: '',
  component: TrainingLibContainerComponent,
  canActivate: [LoginGuard],
  children: []
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingLibraryRoutingModule { }
