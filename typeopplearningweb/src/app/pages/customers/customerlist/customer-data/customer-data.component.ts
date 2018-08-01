import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AppState } from './../../../../@models/app-state';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl } from '@angular/forms';
import { GetCustomerDetailAction, CustomerDetailUpdateAction, selectorCustomers } from './../../customers.reducer';
import { ActivatedRoute, Params } from '@angular/router';
import { Breadcrumb } from '../../../../@theme/components/breadcrumb/breadcrumb';
import { CustomerDataDetailComponent } from '../customer-data-detail/customer-data-detail.component';
import { CustomersState } from '../../customers-state';

@Component({
  selector: 'tl-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.scss']
})
export class CustomerDataComponent implements OnInit, OnDestroy {
  pathHashArray : string[];
  breadcrumbs: Breadcrumb[] = [{name: 'Customers', link: '/pages/customers', active: false}];
  selectedCustomerName : string;
  form : FormGroup;
  mode: string  = 'view';

  //kiran - optimization ==>
  customer: {_id: string; name: string};
  routeParamSubscription: Subscription;
  loading: boolean;

  @ViewChild(CustomerDataDetailComponent) custDetailsComp : CustomerDataDetailComponent;

  constructor(
    private store: Store<AppState>,
    private activaRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    //retirieveing the selected customer --
    this.customer = {
      _id: this.activaRoute.snapshot.params['id'],
      name: this.activaRoute.snapshot.params['name']
    }
    this.routeParamSubscription = this.activaRoute.params
      .subscribe(
        (params: Params) => {
          this.customer._id = params['id'];
          this.customer.name = params['name'];
        }
      );

    this.breadcrumbs.push({
      name: this.customer.name,
      link: '/pages/customers/'+this.customer._id+'/'+this.customer.name,
      active: true
    });

    // var pathHash = window.location.hash;
    // console.log(pathHash);
    // this.pathHashArray = pathHash.split("/");
    // console.log(this.pathHashArray);
    // var link = "";
    // for(var i=2; i<this.pathHashArray.length; i++){

    //   var active =false;
    //   if(i==2){
    //     link = "/"+this.pathHashArray[i-1]+"/"+this.pathHashArray[i];
    //   }else{
    //     link= link+"/"+this.pathHashArray[i];
    //   }

    //   if(i==this.pathHashArray.length-1){
    //     this.selectedCustomerName = this.pathHashArray[i].split("-").join(" ");
    //     active=true;
    //   }
    //   this.breadcrumbs.push({name: this.pathHashArray[i],
    //   link: link,
    //   active: active,})
    // }

    // this.form = new FormGroup({
    //   customerName: new FormControl(this.selectedCustomerName),

    // });

    // this.store.dispatch(new GetCustomerDetailAction(this.form.value));
    this.loadCustomer();

    this.store.select(selectorCustomers).subscribe(
      (custState: CustomersState) => {
        this.loading = custState.loading;
      }
    )

  }

  loadCustomer() {
    this.store.dispatch(new GetCustomerDetailAction(this.customer));
  }

  saveCustomer() {
    console.log('UPDATED CUST ', this.custDetailsComp.customerDetail);
    this.store.dispatch(new CustomerDetailUpdateAction({updatedCustomer: this.custDetailsComp.customerDetail}))
    this.toggleMode();
  }


  ngOnDestroy() {
    this.routeParamSubscription.unsubscribe();
  }

  toggleMode() {
    this.mode = this.mode === 'view' ? 'edit' : 'view';
  }

}
