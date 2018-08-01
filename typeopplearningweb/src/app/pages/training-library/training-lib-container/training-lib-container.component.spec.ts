import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingLibContainerComponent } from './training-lib-container.component';

describe('TrainingLibContainerComponent', () => {
  let component: TrainingLibContainerComponent;
  let fixture: ComponentFixture<TrainingLibContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingLibContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingLibContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
