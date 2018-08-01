import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingContainerComponent } from './training-container/training-container.component';
import { LoginGuard } from '../../@core/guards/login.guard';
import { TrainingComponent} from './training-component';
import { EquipmentTypeComponent } from './training-equipment/equipment-type/equipment-type.component';
import { TrainingStartComponent } from './training-equipment/equipment-type-list/training-start/training-start.component';

const routes: Routes = [{
  path: '',
  component: TrainingComponent,
  canActivate: [LoginGuard],
  children: [
    {
      path: '',
      component: TrainingContainerComponent
  },
    {
      path: ':id',
      component: EquipmentTypeComponent
  },
    {
    path: ':id/:id',
    component: TrainingStartComponent
  } 
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingsRoutingModule { }