import { selectorTrainingLibrary, EditTrainingLibraryAction, RemoveTrainingLibraryAction } from './../training-library-reducer';
import { AppState } from './../../../@models/app-state';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef, SimpleChanges } from '@angular/core';
import { TrainingLibrary, TrainingLibraryState } from '../training-library-state';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RemoveDialogComponent } from '../../remove-dialog/remove-dialog.component';

@Component({
  selector: 'tl-training-lib-list',
  templateUrl: './training-lib-list.component.html',
  styleUrls: ['./training-lib-list.component.scss']
})
export class TrainingLibListComponent implements OnInit {
  trainingLibraries: TrainingLibrary[];
  @Input() mode: string;
  @Input() searchText: string;

  gridColumnApi;
  columnDefs;
  defaultColumnDef;
  changesRefTrainingList: TrainingLibrary[] = [];
  removedRefTrainingList: TrainingLibrary[] = [];

  constructor(private store: Store<AppState>,
    private modalService: NgbModal) {

  }

  ngOnInit() {
    this.store.select(selectorTrainingLibrary).subscribe(
      (trnLibState: TrainingLibraryState) => {
        this.trainingLibraries = trnLibState.trainingLibraries;
        if(trnLibState.trainingSave){
          this.mode = 'view';
        }
      }
    )
  }

  onRemoveTraining(trainingLib: TrainingLibrary) {
    const activeModal = this.modalService.open(RemoveDialogComponent,{});
    activeModal.componentInstance.header = 'Remove Training';
    activeModal.componentInstance.modalMessage = 'Are you sure want to delete Training';
    activeModal.componentInstance.component = this;
    activeModal.componentInstance.deleteItem = trainingLib;
    // this.store.dispatch( new RemoveTrainingLibraryAction({id: trainingLib._id}) );
  }

  finalRemove(trainingLib: TrainingLibrary) {
    this.store.dispatch( new RemoveTrainingLibraryAction({id: trainingLib._id}) );
  }

  trackChange($event, trainingLib) {
    let matches: boolean = false;
    this.changesRefTrainingList.forEach( trainingItr => {
      if(trainingItr._id === trainingLib._id){
        matches = true;
      }
    });
    if( !matches ){
      this.changesRefTrainingList.push(trainingLib);
    }
    // console.log('changed list========'+this.changesRefTrainingList);
  }


  saveTraining(){
    this.store.dispatch( new EditTrainingLibraryAction({
      changesRefTrainingList: this.changesRefTrainingList,
      // removedRefTrainingList: this.removedRefTrainingList
    }) )
  }
}
