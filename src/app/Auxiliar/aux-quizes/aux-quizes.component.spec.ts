import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxQuizesComponent } from './aux-quizes.component';

describe('AuxQuizesComponent', () => {
  let component: AuxQuizesComponent;
  let fixture: ComponentFixture<AuxQuizesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxQuizesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxQuizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
