import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCoursequizComponent } from './user-coursequiz.component';

describe('UserCoursequizComponent', () => {
  let component: UserCoursequizComponent;
  let fixture: ComponentFixture<UserCoursequizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCoursequizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCoursequizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
