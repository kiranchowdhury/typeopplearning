/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpTokenInterceptor } from './@core/api-handlers/http.token.interceptor';
import { LoginGuard } from './@core/guards/login.guard';
import { ToastrModule } from 'ngx-toastr';
import { NewUserComponent } from './pages/user-list/new-user/new-user.component';
import { RemoveDialogComponent } from './pages/remove-dialog/remove-dialog.component';

@NgModule({
  declarations: [AppComponent, NewUserComponent , RemoveDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    ToastrModule.forRoot(),
  ],
  entryComponents: [NewUserComponent, RemoveDialogComponent],
  bootstrap: [AppComponent],
  providers: [
    LoginGuard,
    // { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppModule {
}
