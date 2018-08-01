import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTrainingStatusComponent } from './user-training-status.component';

describe('UserTrainingStatusComponent', () => {
  let component: UserTrainingStatusComponent;
  let fixture: ComponentFixture<UserTrainingStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTrainingStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTrainingStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
