import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { dataSource } from './controls/data';
import { TextBoxType } from './controls/controls.module';
import { State } from './controls/state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  group: FormGroup;
  data: State[];
  telType = '';
  template = `<img style="vertical-align:middle;" aria-hidden src="{flag}" height="25" />
<span>{name}</span> |
<small>Population: {population}</small>`;
  title = 'app';
  /**
   *
   */
  constructor(private fb: FormBuilder) {
    this.telType = TextBoxType.telephone;
    this.data = dataSource;

    this.group = this.fb.group({
      autoCtrl: new FormControl('', Validators.required),
      textboxCtrl: new FormControl('', Validators.required),
      emailFormCtrl: new FormControl('', [Validators.required, Validators.email]),
      telPhoneCtrl: new FormControl('', [Validators.required]),
      chkCtrl: new FormControl(),
      dateCtrl: new FormControl()
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.group.controls['autoCtrl'].setValue('Arkansas');
    }, 1000);
  }
}
