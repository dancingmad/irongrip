import{async, ComponentFixture, TestBed}from '@angular/core/testing';

import {TrainingconfigComponent} from '../training/trainingconfig/trainingconfig.component';

describe('TrainingconfigComponent', () => {
  let component: TrainingconfigComponent;
  let fixture: ComponentFixture<TrainingconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
