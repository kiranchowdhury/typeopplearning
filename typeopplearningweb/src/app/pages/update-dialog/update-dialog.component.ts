import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '../../../../node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'tl-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss']
})
export class UpdateDialogComponent implements OnInit {

  @Input() header;
  @Input() modelMessage;
  @Input() componet: any;
  @Input() updateItem: string;
  @Input() btnlabel: string;
  constructor(private activeModel : NgbActiveModal) { }

  ngOnInit() {
  }

  closeModal(){
    this.activeModel.close();
  }

  updateTraining(){
    console.log('into the update training detail===========');
    this.activeModel.close();
    this.componet.updateUserTraining(this.updateItem);
  }
}
