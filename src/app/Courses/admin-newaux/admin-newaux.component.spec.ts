import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewauxComponent } from './admin-newaux.component';

describe('AdminNewauxComponent', () => {
  let component: AdminNewauxComponent;
  let fixture: ComponentFixture<AdminNewauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNewauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
