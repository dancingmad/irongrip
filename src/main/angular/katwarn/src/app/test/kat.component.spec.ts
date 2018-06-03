import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KatComponent } from '../kat/kat.component';

describe('KatComponent', () => {
  let component: KatComponent;
  let fixture: ComponentFixture<KatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
