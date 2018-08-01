import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { AppState } from '../../@models/app-state';

@Component({
  selector: 'tl-remove-dialog',
  templateUrl: './remove-dialog.component.html',
  styleUrls: ['./remove-dialog.component.scss']
})
export class RemoveDialogComponent implements OnInit {

  @Input() header;
  @Input() modalMessage;
  @Input() component: any;
  @Input() deleteItem: any;

  constructor( private activeModal: NgbActiveModal,
    private store: Store<AppState>) {}

  ngOnInit() {

  }

  closeModal() {
    this.activeModal.close();
  }

  removeBtn(){
    this.activeModal.close();
    // console.log(this.deleteItem);
    this.component.finalRemove(this.deleteItem);
  }

}
