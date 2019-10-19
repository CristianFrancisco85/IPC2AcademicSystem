import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAuxiliaresComponent } from './admin-auxiliares.component';

describe('AdminAuxiliaresComponent', () => {
  let component: AdminAuxiliaresComponent;
  let fixture: ComponentFixture<AdminAuxiliaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAuxiliaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAuxiliaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
