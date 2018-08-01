import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tl-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
  pathHashArray : string[];
  breadcrumbs = [];
  selectedEquipment : string;
  creditCardChecked : boolean = false;
  constructor() { }

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
  }
  onCardChange = function(){
    if(this.creditCardChecked)
      this.creditCardChecked = false;
    else
      this.creditCardChecked = true;
  }

}
