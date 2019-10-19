import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCourseactivitieComponent } from './user-courseactivitie.component';

describe('UserCourseactivitieComponent', () => {
  let component: UserCourseactivitieComponent;
  let fixture: ComponentFixture<UserCourseactivitieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCourseactivitieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCourseactivitieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
