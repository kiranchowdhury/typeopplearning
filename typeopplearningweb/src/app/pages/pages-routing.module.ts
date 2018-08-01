import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
// import { HowToComponent } from './howto/how-to/how-to.component';
import { FaqContainerComponent } from './faq/faq-container/faq-container.component';
import { ProfilesContainerComponent } from './profiles/profiles-container/profiles-container.component';
import { TrainingContainerComponent } from './training/training-container/training-container.component';
import { InvoiceContainerComponent } from './invoices/invoice-container/invoice-container.component'
import { CertificatesComponent } from './certificates/certificates.component';

import { LoginGuard } from '../@core/guards/login.guard';
import { ResetPasswordComponent } from '../@theme/components/reset-password/reset-password.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
     path: 'reset/:email/:token',
     component: ResetPasswordComponent
  },
  {
    path: 'customers',
    loadChildren: './customers/customers.module#CustomersModule',
    data: {
      // Uses static text (Home)
      breadcrumbs: true,
      text: 'Customers',
      active: true,
    }
  },
  {
    path: 'traininglibs',
    loadChildren: './training-library/training-library.module#TrainingLibraryModule'
  },
  {
    path: 'howto',
    loadChildren: './howto/howto.module#HowtoModule'
    // component: HowToComponent,
    // canActivate: [LoginGuard]
  },
  {
    path: 'faq',
    component: FaqContainerComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'subscriptions',
    loadChildren: './subscriptions/subscriptions.module#SubscriptionsModule',
    canActivate: [LoginGuard]
  }, {
    path: 'profiles',
    component: ProfilesContainerComponent,
    canActivate: [LoginGuard]
  }, {
    path: 'trainings',
    loadChildren: './training/training.module#TrainingModule',
    //component: TrainingContainerComponent,
   data: {
      // Uses static text (Home)
      breadcrumbs: true,
      text: 'Trainings',
      active: true,
    },
    canActivate: [LoginGuard]
  }, {
    path: 'userlist',
    loadChildren: './user-list/user-list.module#UserListModule'
  }, {
    path: 'invoices',
    loadChildren: './invoices/invoices.module#InvoicesModule',
    //component : InvoicesComponent,
    canActivate : [LoginGuard]
  }, {
    path: 'certificates',
    component: CertificatesComponent,
    canActivate: [LoginGuard]
  }, {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  }
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
