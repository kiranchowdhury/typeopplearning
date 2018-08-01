import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusyIndicatorComponent } from './busy-indicator/busy-indicator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { TlDesignModule } from '../@tldesign/tl-design.module';
import { NotificationComponent } from './notification/notification.component';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
  ],
  declarations: [BusyIndicatorComponent, ModalComponent, NotificationComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BusyIndicatorComponent,
    ModalComponent,
    TlDesignModule,
    NotificationComponent,
    MaterialModule
  ],
  entryComponents: [ModalComponent]
})
export class SharedModule { }
