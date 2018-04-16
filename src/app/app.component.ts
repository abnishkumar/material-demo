import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { dataSource } from './controls/data';
import { TextBoxType } from './controls/controls.module';
import { State } from './controls/state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {


  title = 'app';
  autoCtrl: FormControl = new FormControl('Arkansas', Validators.required);
  textboxCtrl: FormControl = new FormControl('', Validators.required);
  emailFormCtrl: FormControl = new FormControl('', [Validators.required, Validators.email]);
  telPhoneCtrl: FormControl = new FormControl('', [Validators.required]);
  chkCtrl: FormControl = new FormControl();
  dateCtrl: FormControl = new FormControl();
  telType = TextBoxType.telephone;
  data: State[] = dataSource;
  template = `<img style="vertical-align:middle;" aria-hidden src="{flag}" height="25" />
<span>{name}</span> |
<small>Population: {population}</small>`;

}
