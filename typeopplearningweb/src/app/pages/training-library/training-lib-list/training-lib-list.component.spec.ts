import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingLibListComponent } from './training-lib-list.component';

describe('TrainingLibListComponent', () => {
  let component: TrainingLibListComponent;
  let fixture: ComponentFixture<TrainingLibListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingLibListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingLibListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
