import { AppState } from './../../../@models/app-state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FaqData} from '../faq-state';

@Component({
  selector: 'tl-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.scss']
})
export class FaqListComponent implements OnInit {

  panelOpenState: boolean = false;
  faqList : any[];
  gridColumnApi;
  columnDefs;
  constructor(private store: Store<AppState>) { 
   
  }
  

  ngOnInit() {
    const faqDataArr: Array<{id: number, faqTitle: string, faqDetail : string}> = [
      {id: 0, faqTitle : 'this is test faq title-0', faqDetail : 'this is test faq Detail-0'},
      {id: 1, faqTitle : 'this is test faq title-1', faqDetail : 'this is test faq Detail-1'},
      {id: 2, faqTitle : 'this is test faq title-2', faqDetail : 'this is test faq Detail-2'},
      {id: 3, faqTitle : 'this is test faq title-3', faqDetail : 'this is test faq Detail-3'},
      {id: 4, faqTitle : 'this is test faq title-4', faqDetail : 'this is test faq Detail-4'},
      {id: 5, faqTitle : 'this is test faq title-5', faqDetail : 'this is test faq Detail-5'}
    ];
    this.faqList = faqDataArr;
     
    console.log(this.faqList);
  }

}
