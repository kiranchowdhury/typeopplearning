import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingLibSearchComponent } from './training-lib-search.component';

describe('TrainingLibSearchComponent', () => {
  let component: TrainingLibSearchComponent;
  let fixture: ComponentFixture<TrainingLibSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingLibSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingLibSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
