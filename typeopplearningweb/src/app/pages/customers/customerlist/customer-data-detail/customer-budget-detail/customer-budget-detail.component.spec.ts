import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBudgetDetailComponent } from './customer-budget-detail.component';

describe('CustomerBudgetDetailComponent', () => {
  let component: CustomerBudgetDetailComponent;
  let fixture: ComponentFixture<CustomerBudgetDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerBudgetDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBudgetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
