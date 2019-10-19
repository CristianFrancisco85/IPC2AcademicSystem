import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCourseforumComponent } from './user-courseforum.component';

describe('UserCourseforumComponent', () => {
  let component: UserCourseforumComponent;
  let fixture: ComponentFixture<UserCourseforumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCourseforumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCourseforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
