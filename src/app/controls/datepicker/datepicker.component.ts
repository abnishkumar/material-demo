import { Component, OnInit, Input } from '@angular/core';
import { BaseControls } from '../base.controls';
import { NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';

// Workaround
// extend NativeDateAdapter's format method to specify the date format.
export class CustomDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
    if (displayFormat === 'input') {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      // Return the format as per your requirement
      return `${year}-${month}-${day}`;
    } else {
      return date.toDateString();
    }
  }

  // If required extend other NativeDateAdapter methods.
}

const MY_DATE_FORMATS = {
  parse: {
    dateInput: { month: 'short', year: 'numeric', day: 'numeric' }
  },
  display: {
    dateInput: 'input',
    monthYearLabel: { year: 'numeric', month: 'short' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
  }
};


@Component({
  selector: 'ngs-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [
    {
      provide: DateAdapter, useClass: CustomDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS
    }
  ]
})

export class NgsDatePickerComponent extends BaseControls implements OnInit {

  @Input() minDate = new Date();
  @Input() maxDate = new Date();
  @Input() preventWeekends = false;
  @Input() touchUi = false;

  constructor() {
    super();
    this.minDate.setDate(this.minDate.getDate() - Number.MAX_SAFE_INTEGER);
    this.maxDate.setDate(this.maxDate.getDate() + Number.MAX_SAFE_INTEGER);
  }

  ngOnInit() {

  }

  myFilter = (d: Date): boolean => {
    if (this.preventWeekends) {
      const day = d.getDay();
      // Prevent Saturday and Sunday from being selected.
      return day !== 0 && day !== 6;
    }
    return true;
  }

}
