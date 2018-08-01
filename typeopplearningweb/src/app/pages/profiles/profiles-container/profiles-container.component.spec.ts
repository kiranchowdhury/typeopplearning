import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesContainerComponent } from './profiles-container.component';

describe('ProfilesContainerComponent', () => {
  let component: ProfilesContainerComponent;
  let fixture: ComponentFixture<ProfilesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
