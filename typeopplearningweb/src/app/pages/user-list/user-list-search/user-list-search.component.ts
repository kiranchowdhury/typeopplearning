import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tl-user-list-search',
  templateUrl: './user-list-search.component.html',
  styleUrls: ['./user-list-search.component.scss']
})
export class UserListSearchComponent implements OnInit {

  search: String = '';
  searchText: String = '';

  constructor() { }

  ngOnInit() {
  }

  searchTextUpdate = function($event) {
    this.search = this.searchText;
  }
}
