import { BaseControls } from '../base.controls';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngs-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class NgsTextboxComponent extends BaseControls implements OnInit {

  @Input() type: string;
  @Input() inputPrefix: string;
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
