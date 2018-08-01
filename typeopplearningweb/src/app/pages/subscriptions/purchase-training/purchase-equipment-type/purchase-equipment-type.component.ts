import { Component, OnInit } from '@angular/core';
import { AppState } from './../../../../@models/app-state';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl } from '@angular/forms';
import { GetEquipmentTypeListAction, selectorTrainingCat} from './../../subcriptions-reducer';
import { TrainingCatState } from '../../subscriptions-state';
import { TrainingLibrary } from '../../../training-library/training-library-state';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'tl-purchase-equipment-type',
  templateUrl: './purchase-equipment-type.component.html',
  styleUrls: ['./purchase-equipment-type.component.scss']
})
export class PurchaseEquipmentTypeComponent implements OnInit {

  pathHashArray : string[];
  breadcrumbs = [];
  selectedEquipment : string;
  form: FormGroup ;
  loading: boolean = false;
  loadingMsg: string = '';
  trainingDetailsList?: TrainingLibrary[] = [];
  trainingId: string;

  constructor(private store: Store<AppState>,
    private toastr: ToastrService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    var pathHash = window.location.hash;
    //console.log(pathHash);
    this.pathHashArray = pathHash.split("/");
    //console.log(this.pathHashArray);
    var link = "";
    for(var i=2; i<this.pathHashArray.length; i++){

      var active =false;
      if(i==2){
        link = "/"+this.pathHashArray[i-1]+"/"+this.pathHashArray[i];
      }else{
        link= link+"/"+this.pathHashArray[i];
      }

      if(i==this.pathHashArray.length-1){
        this.selectedEquipment = this.pathHashArray[i].split("-").join(" ");
        active=true;
      }
      this.breadcrumbs.push({name: this.pathHashArray[i],
      link: link,
      active: active,})
    }
    this.form = new FormGroup({
      equipmentCat: new FormControl(this.selectedEquipment.split(" ").join("-")),

    });

    //console.log('=====form value======on equipment type dispatch');
    //console.log('on dispatch=======');
    // this.store.dispatch(new GetEquipmentTypeListAction(this.form.value));
    this.store.select(selectorTrainingCat).subscribe(
      (trainingCatState: TrainingCatState) => {
        this.trainingDetailsList = trainingCatState.trainingDetailsList;
        this.loading = trainingCatState.loading;
        // console.log('error',trainingCatState.errorCode.length);
        if(!this.loading && trainingCatState.loadingMsg && trainingCatState.loadingMsg.length > 0) {
          this.toastr.success(trainingCatState.loadingMsg);
        }else {
          this.toastr.error(trainingCatState.errorCode + ":" + trainingCatState.errorMsg);
        }
        // this.filterCategories(this.trainingDetailsList);
      }
    );
    this.trainingId = this.route.snapshot.paramMap.get('id');

  }



}
