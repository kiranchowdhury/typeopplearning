import { EffectsModule } from '@ngrx/effects';
import { TrainingCatEffects } from './subscriptions-effects';
import { TrainingCat } from './subscriptions-state';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../@shared/shared.module';
import { SubscriptionsRoutingModule } from './subscriptions-routing.module';
import { SubscriptionContainerComponent } from './subscription-container/subscription-container.component';
import { PurchaseTrainingComponent } from './purchase-training/purchase-training.component';
import { AllowedTrainingComponent } from './allowed-training/allowed-training.component';
import { BudgetComponent } from './budget/budget.component';
import { trainingCatReducer} from './subcriptions-reducer';
import { SubscriptionService} from './subscriptions-service';
import { SearchTrainingComponent } from './search-training/search-training.component';
import { PurchaseEquipmentTypeComponent } from './purchase-training/purchase-equipment-type/purchase-equipment-type.component';
import { PurchaseEquipmentListComponent } from './purchase-training/purchase-equipment-list/purchase-equipment-list.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { AllowedTrainingEquipmentComponent } from './allowed-training/allowed-training-equipment/allowed-training-equipment.component';
import { AllowedTrainingEquipmentTypeComponent } from './allowed-training/allowed-training-equipment-type/allowed-training-equipment-type.component';
import { AllowedTrainingEquipmentTypeListComponent } from './allowed-training/allowed-training-equipment-type-list/allowed-training-equipment-type-list.component';
//import { SubscriptionsComponent} from './subscriptions-component'

@NgModule({
  imports: [
    CommonModule,
    SubscriptionsRoutingModule,
    SharedModule,
    StoreModule.forFeature('trainingCat',{
      trainingCatState: trainingCatReducer
  }),
  EffectsModule.forFeature([TrainingCatEffects])
  ],
  declarations: [ SubscriptionContainerComponent, PurchaseTrainingComponent, AllowedTrainingComponent, BudgetComponent, SearchTrainingComponent, PurchaseEquipmentTypeComponent, PurchaseEquipmentListComponent, InvoicesComponent, InvoiceListComponent, AllowedTrainingEquipmentComponent, AllowedTrainingEquipmentTypeComponent, AllowedTrainingEquipmentTypeListComponent],
  providers: [SubscriptionService]
})
export class SubscriptionsModule { }
