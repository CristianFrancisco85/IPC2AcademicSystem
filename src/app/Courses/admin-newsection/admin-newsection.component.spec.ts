import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewsectionComponent } from './admin-newsection.component';

describe('AdminNewsectionComponent', () => {
  let component: AdminNewsectionComponent;
  let fixture: ComponentFixture<AdminNewsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNewsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
