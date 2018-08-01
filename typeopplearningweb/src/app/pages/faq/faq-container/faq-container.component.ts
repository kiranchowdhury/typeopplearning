import { AppState } from './../../../@models/app-state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tl-faq-container',
  templateUrl: './faq-container.component.html',
  styleUrls: ['./faq-container.component.scss']
})
export class FaqContainerComponent implements OnInit {

  pageHeading :string = 'FAQ';

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

}
