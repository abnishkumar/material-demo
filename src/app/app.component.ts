import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

import { TextBoxType } from './controls/controls.module';
import { State } from './state.model';
import { dataSource } from './data';
import { OverlayContainer } from '@angular/cdk/overlay';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  theme = 'my-dark-theme';
  group: FormGroup;
  themeList = ['my-light-theme', 'my-dark-theme', 'my-theme'];
  data: State[];
  textBoxType = '';
  template = `<img style="vertical-align:middle;" aria-hidden src="{flag}" height="25" />
<span>{name}</span> |
<small>Population: {population}</small>`;
  title = 'app';
  /**
   *
   */
  constructor(private fb: FormBuilder, private overlayContainer: OverlayContainer) {
    this.textBoxType = TextBoxType.telephone;
    this.data = dataSource;

    this.group = this.fb.group({
      autoCtrl: new FormControl('', Validators.required),
      textboxCtrl: new FormControl('', [Validators.required, Validators.maxLength(5)]),
      emailFormCtrl: new FormControl('', [Validators.required, Validators.email]),
      telPhoneCtrl: new FormControl('', [Validators.required]),
      chkCtrl: new FormControl(),
      dateCtrl: new FormControl(),
      slideCtrl: new FormControl(),
      dropDownCtrl: new FormControl()
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.group.controls['autoCtrl'].setValue('Arkansas');
    }, 2000);
  }
  onChange(data) {
    this.theme = data.value;
    this.overlayContainer['themeClass'] = this.theme;
  }
}
