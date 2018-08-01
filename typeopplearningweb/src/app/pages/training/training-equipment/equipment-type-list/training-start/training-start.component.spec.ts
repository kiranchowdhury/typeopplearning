import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingStartComponent } from './training-start.component';

describe('TrainingStartComponent', () => {
  let component: TrainingStartComponent;
  let fixture: ComponentFixture<TrainingStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
