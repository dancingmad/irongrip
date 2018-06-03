import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KatlistComponent } from '../katlist/katlist.component';

describe('KatlistComponent', () => {
  let component: KatlistComponent;
  let fixture: ComponentFixture<KatlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KatlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KatlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
