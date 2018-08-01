import { FaqComponent } from './faq.component';
import { SharedModule } from './../../@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import { FaqContainerComponent } from './faq-container/faq-container.component';
import { FaqListComponent } from './faq-list/faq-list.component';
import { FaqRoutingModule } from './faq-routing.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    FaqRoutingModule,
    SharedModule,
    MatExpansionModule
  ],
  declarations: [FaqContainerComponent, FaqListComponent, FaqComponent]
})
export class FaqModule { }
