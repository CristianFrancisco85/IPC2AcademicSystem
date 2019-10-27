import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewquizComponent } from './user-viewquiz.component';

describe('UserViewquizComponent', () => {
  let component: UserViewquizComponent;
  let fixture: ComponentFixture<UserViewquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserViewquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
