import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tl-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  ico1 = require('../../../assets/images/ic-01.png');
  ico2 = require('../../../assets/images/ic-02.png');
  ico3 = require('../../../assets/images/ic-02.png');
  constructor() { }

  ngOnInit() {
  }

}
