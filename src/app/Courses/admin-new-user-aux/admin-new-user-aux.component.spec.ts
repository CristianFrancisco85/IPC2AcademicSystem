import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewUserAuxComponent } from './admin-new-user-aux.component';

describe('AdminNewUserAuxComponent', () => {
  let component: AdminNewUserAuxComponent;
  let fixture: ComponentFixture<AdminNewUserAuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNewUserAuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewUserAuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
