import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxMessagesComponent } from './aux-messages.component';

describe('AuxMessagesComponent', () => {
  let component: AuxMessagesComponent;
  let fixture: ComponentFixture<AuxMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
