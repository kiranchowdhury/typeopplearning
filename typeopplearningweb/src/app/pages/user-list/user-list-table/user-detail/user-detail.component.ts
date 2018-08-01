import { Component, OnInit } from '@angular/core';
import { AppState } from './../../../../@models/app-state';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl } from '@angular/forms';
import { GetUserDetailAction, GetTrainingStatusAction} from './../../user-list-reducer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tl-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  pathHashArray : string[];
  breadcrumbs = [];
  selectedUserName : string;
  urlHash :string;
  form :FormGroup;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.urlHash = window.location.hash;
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
        this.selectedUserName = this.pathHashArray[i].split("-").join(" ");
        active=true;
      }
      this.breadcrumbs.push({name: this.pathHashArray[i],
      link: link,
      active: active,})
    }

    this.form = new FormGroup({
      fullName: new FormControl(''),
    });
// getting user details
    // this.employeeId = this.route.snapshot.paramMap.get('id');
    // this.store.dispatch(new GetUserDetailAction({id: this.employeeId}));
    // this.store.dispatch(new GetTrainingStatusAction(this.form.value))
  }

}
