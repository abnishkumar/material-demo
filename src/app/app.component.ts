import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

import { TextBoxType, DropDownGroups, DropDownOption } from './controls/controls.module';
import { State } from './state.model';
import { dataSource } from './data';
import { OverlayContainer } from '@angular/cdk/overlay';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  theme = 'my-theme';
  group: FormGroup;

  data: State[];
  textBoxType = '';
  template = `<img style="vertical-align:middle;" aria-hidden src="{flag}" height="25" />
<span>{name}</span> |
<small>Population: {population}</small>`;
  title = 'app';

  // drop-down data-source
  themeList: DropDownOption[] = [
    { value: 'my-light-theme', text: 'my-light-theme' },
    { value: 'my-dark-theme', text: 'my-dark-theme' },
    { value: 'my-theme', text: 'my-theme' }
  ];
  // group drop-down data-source
  dropDownWithGroups: DropDownGroups[] = [
    {
      name: 'Grass',
      dropDownOption: [
        { value: 'bulbasaur-0', text: 'Bulbasaur' },
        { value: 'oddish-1', text: 'Oddish' },
        { value: 'bellsprout-2', text: 'Bellsprout' }
      ]
    },
    {
      name: 'Water',
      dropDownOption: [
        { value: 'squirtle-3', text: 'Squirtle' },
        { value: 'psyduck-4', text: 'Psyduck' },
        { value: 'horsea-5', text: 'Horsea' }
      ]
    },
    {
      name: 'Fire',
      disabled: true,
      dropDownOption: [
        { value: 'charmander-6', text: 'Charmander' },
        { value: 'vulpix-7', text: 'Vulpix' },
        { value: 'flareon-8', text: 'Flareon' }
      ]
    },
    {
      name: 'Psychic',
      dropDownOption: [
        { value: 'mew-9', text: 'Mew' },
        { value: 'mewtwo-10', text: 'Mewtwo' },
      ]
    }
  ];


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
      dropDownCtrl: new FormControl(),
      dropDownGroupCtrl: new FormControl()
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.group.controls['autoCtrl'].setValue('Arkansas');
    }, 2000);
  }
  onChange(data) {
    this.theme = data.value;
    // override old theme class and add new theme class
    this.overlayContainer['themeClass'] = this.theme;
  }
}
