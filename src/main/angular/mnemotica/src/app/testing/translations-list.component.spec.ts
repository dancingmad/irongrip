import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslationentryComponent } from '../components/translation/translations-list/translationentry.component';

describe('TranslationsListComponent', () => {
  let component: TranslationentryComponent;
  let fixture: ComponentFixture<TranslationentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslationentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslationentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
