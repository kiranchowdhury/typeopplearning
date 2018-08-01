import { LoginState } from './../../../@core/login/login.state';
import { selectorLogin } from './../../../@core/login/login.reducer';
import { Component, Input, OnInit } from '@angular/core';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/context/user.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../../@shared/modal/modal.component';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../@models/app-state';
import { ActionSignOut } from '../../../@core/login/login.reducer';
import { SignupDialogComponent } from '../signup-dialog/signup-dialog.component';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  authenticated: boolean = false;
  currentUser: LoginState;

  @Input() position = 'normal';

  user: any;

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private analyticsService: AnalyticsService,
              private modalService: NgbModal,
              private store: Store<AppState>,
            private userService: UserService) {
  }

  ngOnInit() {
    // this.currentUser = this.userService.getCurrentUser();
    // this.authenticated = this.currentUser.authenticted;
    this.store.select(selectorLogin).subscribe(
      (loginState: LoginState) => {
        this.authenticated = loginState.authenticated;
        this.currentUser = loginState;
      }
    )
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
  openLoginModal() {
   // console.log('Opening Login dialog');
    const activeModal = this.modalService.open(LoginDialogComponent, {});
   // activeModal.componentInstance.modalHeader = 'SIGN IN';

  }

  openSignupModal () {
    const activeModal = this.modalService.open(SignupDialogComponent, {});
  }

  logOut() {
    console.log("Logging out");
    this.store.dispatch(new ActionSignOut());
  }
}
