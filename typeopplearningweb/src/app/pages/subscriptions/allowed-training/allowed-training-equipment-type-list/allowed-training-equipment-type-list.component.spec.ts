import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowedTrainingEquipmentTypeListComponent } from './allowed-training-equipment-type-list.component';

describe('AllowedTrainingEquipmentTypeListComponent', () => {
  let component: AllowedTrainingEquipmentTypeListComponent;
  let fixture: ComponentFixture<AllowedTrainingEquipmentTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllowedTrainingEquipmentTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllowedTrainingEquipmentTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
