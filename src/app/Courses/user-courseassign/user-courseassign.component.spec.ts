import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCourseassignComponent } from './user-courseassign.component';

describe('UserCourseassignComponent', () => {
  let component: UserCourseassignComponent;
  let fixture: ComponentFixture<UserCourseassignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCourseassignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCourseassignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
