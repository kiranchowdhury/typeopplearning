import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowedTrainingComponent } from './allowed-training.component';

describe('AllowedTrainingComponent', () => {
  let component: AllowedTrainingComponent;
  let fixture: ComponentFixture<AllowedTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllowedTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllowedTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
