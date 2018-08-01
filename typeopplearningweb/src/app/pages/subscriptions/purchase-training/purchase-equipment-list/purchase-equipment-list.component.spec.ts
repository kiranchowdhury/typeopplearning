import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseEquipmentListComponent } from './purchase-equipment-list.component';

describe('PurchaseEquipmentListComponent', () => {
  let component: PurchaseEquipmentListComponent;
  let fixture: ComponentFixture<PurchaseEquipmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseEquipmentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseEquipmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
