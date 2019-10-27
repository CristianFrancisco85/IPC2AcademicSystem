import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCoursegradesComponent } from './user-coursegrades.component';

describe('UserCoursegradesComponent', () => {
  let component: UserCoursegradesComponent;
  let fixture: ComponentFixture<UserCoursegradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCoursegradesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCoursegradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
