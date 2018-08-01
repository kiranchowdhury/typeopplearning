import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingContainerComponent } from './training-container.component';

describe('TrainingContainerComponent', () => {
  let component: TrainingContainerComponent;
  let fixture: ComponentFixture<TrainingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
