import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerContainerComponent } from './customer-container/customer-container.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerItemComponent } from './customer-item/customer-item.component';
import { CustomersService } from './customers.service';
import { SharedModule } from '../../@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { customerReducer } from './customers.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CustomersEffects } from './customer.effects';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { AgGridModule } from 'ag-grid-angular';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerComponent} from './customer.component';
import { CustomerDataComponent } from './customerlist/customer-data/customer-data.component';
import { CustomerDataDetailComponent } from './customerlist/customer-data-detail/customer-data-detail.component';
import { MaterialModule} from './../../material.module';
import { CustomerBudgetDetailComponent } from './customerlist/customer-data-detail/customer-budget-detail/customer-budget-detail.component';
import { CustomerBudgetTableComponent } from './customerlist/customer-data-detail/customer-budget-table/customer-budget-table.component';
import { CustomerUserComponent } from './customerlist/customer-data-detail/customer-user/customer-user.component';
import { CustomerUserListComponent } from './customerlist/customer-data-detail/customer-user-list/customer-user-list.component'
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CustomerFilter} from  './customer-filter.pipe';
import { ThemeModule } from '../../@theme/theme.module';
import { RemoveConfirmationComponent } from './remove-confirmation/remove-confirmation.component';

@NgModule({
  imports: [
    SharedModule,
    ThemeModule,
    CustomersRoutingModule,
    NgbModule,
    MaterialModule,
    AgGridModule.withComponents([]),
    PaginationModule.forRoot(),
    StoreModule.forFeature('customers',{
        custState: customerReducer
    }),
    EffectsModule.forFeature([CustomersEffects])
  ],
  declarations: [CustomerComponent, CustomerContainerComponent, CustomerlistComponent, CustomerItemComponent, CustomerSearchComponent, NewCustomerComponent, CustomerDataComponent, CustomerDataDetailComponent, CustomerBudgetDetailComponent, CustomerBudgetTableComponent, CustomerUserComponent, CustomerUserListComponent, CustomerFilter, RemoveConfirmationComponent],
  entryComponents: [NewCustomerComponent, RemoveConfirmationComponent],
  providers: [CustomersService]
})
export class CustomersModule { }
