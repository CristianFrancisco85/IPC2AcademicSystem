import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxCoursequizComponent } from './aux-coursequiz.component';

describe('AuxCoursequizComponent', () => {
  let component: AuxCoursequizComponent;
  let fixture: ComponentFixture<AuxCoursequizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxCoursequizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxCoursequizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
