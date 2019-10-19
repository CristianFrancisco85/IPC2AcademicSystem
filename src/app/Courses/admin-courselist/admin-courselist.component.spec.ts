import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCourselistComponent } from './admin-courselist.component';

describe('AdminCourselistComponent', () => {
  let component: AdminCourselistComponent;
  let fixture: ComponentFixture<AdminCourselistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCourselistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCourselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
