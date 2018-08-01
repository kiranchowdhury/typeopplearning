/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SessionStorageService } from './@core/session-storage/session-storage.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(
    private analytics: AnalyticsService,
    private sessionStorage: SessionStorageService
    ) {
  }

  ngOnInit(): void {
    this.sessionStorage.destroyItem('jwtToken');
    this.analytics.trackPageViews();
  }
}
