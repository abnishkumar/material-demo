import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgsDatePickerComponent } from './datepicker.component';

describe('DatepickerComponent', () => {
  let component: NgsDatePickerComponent;
  let fixture: ComponentFixture<NgsDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgsDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgsDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
