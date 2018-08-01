import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBudgetTableComponent } from './customer-budget-table.component';

describe('CustomerBudgetTableComponent', () => {
  let component: CustomerBudgetTableComponent;
  let fixture: ComponentFixture<CustomerBudgetTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerBudgetTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBudgetTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
