import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tl-how-to',
  templateUrl: './how-to.component.html',
  styleUrls: ['./how-to.component.scss']
})
export class HowToComponent implements OnInit {

  loading: boolean = false;
  loadingMsg: string = '';
  constructor() { }

  ngOnInit() {
  }

}
