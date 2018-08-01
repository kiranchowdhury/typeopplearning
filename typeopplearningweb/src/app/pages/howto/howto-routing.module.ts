import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HowToComponent } from './how-to/how-to.component';

const routes: Routes = [
  { path: '', component: HowToComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HowtoRoutingModule {}
