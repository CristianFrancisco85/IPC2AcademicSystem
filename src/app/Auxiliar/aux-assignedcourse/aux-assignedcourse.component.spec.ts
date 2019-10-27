import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxAssignedcourseComponent } from './aux-assignedcourse.component';

describe('AuxAssignedcourseComponent', () => {
  let component: AuxAssignedcourseComponent;
  let fixture: ComponentFixture<AuxAssignedcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxAssignedcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxAssignedcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
