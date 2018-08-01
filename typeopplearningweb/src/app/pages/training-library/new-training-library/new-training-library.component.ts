import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppState } from '../../../@models/app-state';
import { Store } from '@ngrx/store';
import { CreateTrainingLibraryAction } from '../training-library-reducer';
// import { CreateCustomerAction } from '../customers.reducer';

@Component({
  selector: 'tl-new-customer',
  templateUrl: './new-training-library.component.html',
  styleUrls: ['./new-training-library.component.scss']
})
export class NewTrainingLibraryComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name:  new FormControl(''),
    equipmentCategory:  new FormControl(''),
    equipmentIcon:  new FormControl(''),
    equipmentType:  new FormControl(''),
    date: new FormControl(''),
    manufacturer:  new FormControl(''),
    model:  new FormControl(''),
    document:  new FormControl(''),
  });
  constructor(
      private activeModal: NgbActiveModal,
      private store: Store<AppState>) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close();
  }

  createTrainingLibrary() {
   console.log(this.form.value);
    this.closeModal();
    this.store.dispatch(new CreateTrainingLibraryAction(this.form.value));
    // this.store.dispatch(new ActionSignIn(this.form.value));
  }
}
