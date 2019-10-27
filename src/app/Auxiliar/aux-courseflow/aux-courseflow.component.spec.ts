import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxCourseflowComponent } from './aux-courseflow.component';

describe('AuxCourseflowComponent', () => {
  let component: AuxCourseflowComponent;
  let fixture: ComponentFixture<AuxCourseflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxCourseflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxCourseflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
