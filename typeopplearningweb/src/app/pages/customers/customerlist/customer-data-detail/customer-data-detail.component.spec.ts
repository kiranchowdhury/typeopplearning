import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDataDetailComponent } from './customer-data-detail.component';

describe('CustomerDataDetailComponent', () => {
  let component: CustomerDataDetailComponent;
  let fixture: ComponentFixture<CustomerDataDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDataDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDataDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
