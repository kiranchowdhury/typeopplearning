import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingEquipmentComponent } from './training-equipment.component';

describe('TrainingEquipmentComponent', () => {
  let component: TrainingEquipmentComponent;
  let fixture: ComponentFixture<TrainingEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
