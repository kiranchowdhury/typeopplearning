import { Component, OnInit } from '@angular/core';
import { AppState } from './../../../../../@models/app-state';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl } from '@angular/forms';
import { GetCustomerBudgetDetailAction} from './../../../customers.reducer';

@Component({
  selector: 'tl-customer-budget-detail',
  templateUrl: './customer-budget-detail.component.html',
  styleUrls: ['./customer-budget-detail.component.scss']
})
export class CustomerBudgetDetailComponent implements OnInit {
  pathHashArray : string[];
  breadcrumbs = [];
  selectedCustomerName : string;
  mode: string  = 'view';
  form : FormGroup;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    var pathHash = window.location.hash;
    console.log(pathHash);
    this.pathHashArray = pathHash.split("/");
    console.log(this.pathHashArray);
    var link = "";
    for(var i=2; i<this.pathHashArray.length; i++){
      
      var active =false;
      if(i==2){
        link = "/"+this.pathHashArray[i-1]+"/"+this.pathHashArray[i];
      }else{
        link= link+"/"+this.pathHashArray[i];
      }

      if(i==this.pathHashArray.length-1){
        this.selectedCustomerName = this.pathHashArray[i].split("-").join(" ");
        active=true;
      }
      this.breadcrumbs.push({name: this.pathHashArray[i],
      link: link,
      active: active,})
    }
    this.form = new FormGroup({
      customerName: new FormControl(this.selectedCustomerName),
      
    });
    
    this.store.dispatch(new GetCustomerBudgetDetailAction(this.form.value));
    
  }

  toggleMode() {
    this.mode = this.mode === 'view' ? 'edit' : 'view';
  }

}
