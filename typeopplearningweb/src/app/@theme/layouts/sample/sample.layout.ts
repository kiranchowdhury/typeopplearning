// import { CurrentUser } from './../../../@core/context/user.model';
import { Component, OnDestroy, Input, OnInit } from '@angular/core';
import { delay, withLatestFrom } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import {
  NbMediaBreakpoint,
  NbMediaBreakpointsService,
  NbMenuItem,
  NbMenuService,
  NbSidebarService,
  NbThemeService,
} from '@nebular/theme';

import { StateService } from '../../../@core/data/state.service';
import { UserService } from '../../../@core/context/user.service';

// TODO: move layouts into the framework
@Component({
  selector: 'ngx-sample-layout',
  styleUrls: ['./sample.layout.scss'],
  template: `
  <nb-layout [center]="layout.id === 'center-column'" windowMode>
  <nb-layout-header fixed>
    <ngx-header [position]="sidebar.id === 'start' ? 'normal': 'inverse'"></ngx-header>
  </nb-layout-header>

  <nb-sidebar *ngIf="authenticated" class="menu-sidebar"
               tag="menu-sidebar"
               responsive
               [end]="sidebar.id === 'end'">

    <ng-content select="nb-menu"></ng-content>
  </nb-sidebar>

  <nb-layout-column class="main-content">
   <!-- <tl-breadcrumb *ngIf="authenticated"></tl-breadcrumb> -->
    <ng-content select="router-outlet"></ng-content>
  </nb-layout-column>



</nb-layout>
  `,
})
export class SampleLayoutComponent implements OnInit, OnDestroy {
  @Input()authenticated: boolean;



  layout: any = {};
  sidebar: any = {};
  displaySidebar: string;

  protected layoutState$: Subscription;
  protected sidebarState$: Subscription;
  protected menuClick$: Subscription;

  constructor(protected stateService: StateService,
              protected menuService: NbMenuService,
              protected themeService: NbThemeService,
              protected bpService: NbMediaBreakpointsService,
              protected sidebarService: NbSidebarService,
              protected userService: UserService) {
    this.layoutState$ = this.stateService.onLayoutState()
      .subscribe((layout: string) => this.layout = layout);

    this.sidebarState$ = this.stateService.onSidebarState()
      .subscribe((sidebar: string) => {
        this.sidebar = sidebar;
      });

    const isBp = this.bpService.getByName('is');
    this.menuClick$ = this.menuService.onItemSelect()
      .pipe(
        withLatestFrom(this.themeService.onMediaQueryChange()),
        delay(20),
      )
      .subscribe(([item, [bpFrom, bpTo]]: [any, [NbMediaBreakpoint, NbMediaBreakpoint]]) => {

        if (bpTo.width <= isBp.width) {
          this.sidebarService.collapse('menu-sidebar');
        }
      });
      this.menuService.getSelectedItem().subscribe(
        item => console.log('Menu Item', item)
      )
  }

  getSideBarDisplay() {
    return this.authenticated? "block": "none";
  }

  ngOnInit() {
    // this.authenticated = this.userService.getCurrentUser().authenticted;
    // alert(this.authenticated);
    // this.userService.currentUserSubject.subscribe(
    //   (currentUser: CurrentUser) => {
    //     this.authenticated = currentUser.authenticted;
    //   }
    // )

  }

  ngOnDestroy() {
    this.layoutState$.unsubscribe();
    this.sidebarState$.unsubscribe();
    this.menuClick$.unsubscribe();
  }
}
