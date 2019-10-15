import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewcourseComponent } from './admin-newcourse.component';

describe('AdminNewcourseComponent', () => {
  let component: AdminNewcourseComponent;
  let fixture: ComponentFixture<AdminNewcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNewcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
