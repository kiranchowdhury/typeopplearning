import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ButtonSmallComponent } from './button-small/button-small.component';
import { StatusDotComponent } from './element/status-dot/status-dot.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ButtonComponent, ButtonSmallComponent, StatusDotComponent],
  exports: [ButtonComponent,ButtonSmallComponent, StatusDotComponent]
})
export class TlDesignModule { }
