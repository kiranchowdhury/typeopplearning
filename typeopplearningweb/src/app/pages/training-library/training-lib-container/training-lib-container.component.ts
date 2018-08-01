import { AppState } from './../../../@models/app-state';
import { Store } from '@ngrx/store';
import { TrainingLibrary, TrainingLibraryState } from './../training-library-state';
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { selectorTrainingLibrary, GetTrainingLibraryAction } from '../training-library-reducer';
import { TrainingLibListComponent } from '../training-lib-list/training-lib-list.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewTrainingLibraryComponent } from '../new-training-library/new-training-library.component';

@Component({
  selector: 'tl-training-lib-container',
  templateUrl: './training-lib-container.component.html',
  styleUrls: ['./training-lib-container.component.scss']
})
export class TrainingLibContainerComponent implements OnInit {
  loading: boolean = false;
  loadingMsg: string = '';
  trainingLibrary: TrainingLibrary[];
  mode: string  = 'view';
  // @Output() saveTrainingEvent: EventEmitter<TrainingLibrary> = new EventEmitter();
  @ViewChild(TrainingLibListComponent) listComponent: TrainingLibListComponent;

  constructor(private store: Store<AppState>,
    private modalService: NgbModal
    ) { }

  ngOnInit() {
    this.store.select(selectorTrainingLibrary).subscribe(
      (tlState: TrainingLibraryState) => {
        this.loading = tlState.loading;
        this.loadingMsg = tlState.loadingMsg;
        this.trainingLibrary = tlState.trainingLibraries;
        if(tlState.trainingSave){
          this.mode = 'view';
        }
        // console.log("trainingLibrary", this.trainingLibrary);
      }
    )
    this.store.dispatch(new GetTrainingLibraryAction());
  }


  toggleMode() {
    this.mode = this.mode === 'view' ? 'edit' : 'view';
  }

  saveClick() {
    this.listComponent.saveTraining();
  }


  openNewTrainingDialog() {
    const activeModal = this.modalService.open(NewTrainingLibraryComponent, {});
  }


}
