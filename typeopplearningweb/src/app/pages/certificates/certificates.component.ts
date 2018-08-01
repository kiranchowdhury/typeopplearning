import { Component, OnInit } from '@angular/core';
import { AppState } from '../../@models/app-state';
import { Store } from '@ngrx/store';
import { GetCertificatesAction, selectorCertificates, initialCertificateState } from './certificate-reducer';
import { CertificateState, Certificate } from './certificate-state'
@Component({
  selector: 'tl-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {

  loading: boolean = false;
  loadingMsg: string = '';

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new GetCertificatesAction());

  }

}
