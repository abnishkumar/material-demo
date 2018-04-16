import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgsAutocompleteComponent } from './autocomplete.component';

describe('AutocompleteComponent', () => {
  let component: NgsAutocompleteComponent;
  let fixture: ComponentFixture<NgsAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgsAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgsAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
