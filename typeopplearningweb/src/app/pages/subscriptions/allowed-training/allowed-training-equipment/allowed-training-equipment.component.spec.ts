import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowedTrainingEquipmentComponent } from './allowed-training-equipment.component';

describe('AllowedTrainingEquipmentComponent', () => {
  let component: AllowedTrainingEquipmentComponent;
  let fixture: ComponentFixture<AllowedTrainingEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllowedTrainingEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllowedTrainingEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
