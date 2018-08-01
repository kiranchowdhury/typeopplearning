import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseTrainingComponent } from './purchase-training.component';

describe('PurchaseTrainingComponent', () => {
  let component: PurchaseTrainingComponent;
  let fixture: ComponentFixture<PurchaseTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
