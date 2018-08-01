import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tl-faq',
  templateUrl: './faq.component.html'
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  cancelCreate(){
    alert('Test Angular Material');
  }
}
