import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificatesComponent } from './certificates.component';
import { CertificateListComponent } from './certificate-list/certificate-list.component';
import { EffectsModule } from '@ngrx/effects';
import { CertificateEffects } from './certificate.effects';
import { Certificate } from './certificate-state';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../../@shared/shared.module';
import { certificateReducer } from './certificate-reducer';
import { CertificateService } from './certificate.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('certificate',{
      certificateState: certificateReducer
    }),
    EffectsModule.forFeature([CertificateEffects])
  ],
  declarations: [CertificatesComponent, CertificateListComponent],
  providers: [CertificateService]
})
export class CertificatesModule { }
