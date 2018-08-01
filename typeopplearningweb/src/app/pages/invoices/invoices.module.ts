import { EffectsModule } from '@ngrx/effects';
import { InvoiceEffects} from './invoices-effects'
import { Invoice } from './invoices-state'
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceContainerComponent } from './invoice-container/invoice-container.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { invoiceListReducer} from './invoices-reducer';
import { InvoiceService } from './invoices-service'
import { InvoicesRoutingModule } from './invoices-routing.module';
import { SharedModule } from '../../@shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    SharedModule,
    AgGridModule.withComponents([]),
    StoreModule.forFeature('invoices',{
      invoiceState: invoiceListReducer
  }),
  EffectsModule.forFeature([InvoiceEffects])
  ],
  declarations: [InvoiceContainerComponent, InvoiceListComponent],
  providers: [InvoiceService]
})
export class InvoicesModule { }
