import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAssignedcourseComponent } from './user-assignedcourse.component';

describe('UserAssignedcourseComponent', () => {
  let component: UserAssignedcourseComponent;
  let fixture: ComponentFixture<UserAssignedcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAssignedcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAssignedcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
