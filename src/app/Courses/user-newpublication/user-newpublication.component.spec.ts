import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNewpublicationComponent } from './user-newpublication.component';

describe('UserNewpublicationComponent', () => {
  let component: UserNewpublicationComponent;
  let fixture: ComponentFixture<UserNewpublicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNewpublicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNewpublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
