import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxCourseforumComponent } from './aux-courseforum.component';

describe('AuxCourseforumComponent', () => {
  let component: AuxCourseforumComponent;
  let fixture: ComponentFixture<AuxCourseforumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxCourseforumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxCourseforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
