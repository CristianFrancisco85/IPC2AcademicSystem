import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNewticketComponent } from './user-newticket.component';

describe('UserNewticketComponent', () => {
  let component: UserNewticketComponent;
  let fixture: ComponentFixture<UserNewticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNewticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNewticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
