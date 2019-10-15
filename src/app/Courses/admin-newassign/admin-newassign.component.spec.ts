import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewassignComponent } from './admin-newassign.component';

describe('AdminNewassignComponent', () => {
  let component: AdminNewassignComponent;
  let fixture: ComponentFixture<AdminNewassignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNewassignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewassignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
