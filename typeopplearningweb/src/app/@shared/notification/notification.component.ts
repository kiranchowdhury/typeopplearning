import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'tl-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit, AfterViewInit {

  @Input() level: string;
  @Input() message: string;
  @Output() notifyResetToastPayload: EventEmitter<any> = new EventEmitter();

  constructor(private toastr: ToastrService) { }

  ngAfterViewInit() {
    
  }
  ngOnInit() {
    // alert(this.level);
    if(this.level && this.level.length > 0 && this.message && this.message.length > 0) {
     // alert(this.level + this.message);
      switch(this.level) {
        case 'S': 
          return this.success(this.message);
        case 'E': 
          return this.error(this.message)
        case 'I': 
          this.info(this.message)
        case 'W': 
          this.warning(this.message)
      }
    }
    this.notifyResetToastPayload.emit();
  }

  success(message: string) {
    this.toastr.success(message);
  }

  error(message: string) {
    this.toastr.error(message);
  }

  info(message: string) {
    this.toastr.info(message);
  }

  warning(message: string) {
    this.toastr.warning(message);
  }


}
