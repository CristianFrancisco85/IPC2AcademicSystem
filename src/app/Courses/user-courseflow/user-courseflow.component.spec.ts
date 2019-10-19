import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCourseflowComponent } from './user-courseflow.component';

describe('UserCourseflowComponent', () => {
  let component: UserCourseflowComponent;
  let fixture: ComponentFixture<UserCourseflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCourseflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCourseflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
