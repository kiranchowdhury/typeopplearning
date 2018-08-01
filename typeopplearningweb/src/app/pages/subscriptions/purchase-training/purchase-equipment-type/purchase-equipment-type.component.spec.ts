import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseEquipmentTypeComponent } from './purchase-equipment-type.component';

describe('PurchaseEquipmentTypeComponent', () => {
  let component: PurchaseEquipmentTypeComponent;
  let fixture: ComponentFixture<PurchaseEquipmentTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseEquipmentTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseEquipmentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
