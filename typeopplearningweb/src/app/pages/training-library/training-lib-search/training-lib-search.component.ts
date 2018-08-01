import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'tl-training-lib-search',
  templateUrl: './training-lib-search.component.html',
  styleUrls: ['./training-lib-search.component.scss']
})
export class TrainingLibSearchComponent implements OnInit {

  // @Input() searchText: string;
  search: String = '';
  searchText: String = '';

  constructor() { }

  ngOnInit() {
  }

  searchTextUpdate = function($event) {
    this.search = this.searchText;
  }
}
