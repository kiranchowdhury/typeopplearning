import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowedTrainingEquipmentTypeComponent } from './allowed-training-equipment-type.component';

describe('AllowedTrainingEquipmentTypeComponent', () => {
  let component: AllowedTrainingEquipmentTypeComponent;
  let fixture: ComponentFixture<AllowedTrainingEquipmentTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllowedTrainingEquipmentTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllowedTrainingEquipmentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
