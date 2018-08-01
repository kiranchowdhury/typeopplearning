import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingStartDataComponent } from './training-start-data.component';

describe('TrainingStartDataComponent', () => {
  let component: TrainingStartDataComponent;
  let fixture: ComponentFixture<TrainingStartDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingStartDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingStartDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
