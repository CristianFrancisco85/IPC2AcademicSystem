import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxModuleComponent } from './aux-module.component';

describe('AuxModuleComponent', () => {
  let component: AuxModuleComponent;
  let fixture: ComponentFixture<AuxModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
