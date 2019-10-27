import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxCourseactivitieComponent } from './aux-courseactivitie.component';

describe('AuxCourseactivitieComponent', () => {
  let component: AuxCourseactivitieComponent;
  let fixture: ComponentFixture<AuxCourseactivitieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxCourseactivitieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxCourseactivitieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
