import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgsCheckboxComponent } from './checkbox.component';

describe('CheckboxComponent', () => {
  let component: NgsCheckboxComponent;
  let fixture: ComponentFixture<NgsCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgsCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgsCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
