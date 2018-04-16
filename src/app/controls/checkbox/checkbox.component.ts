import { Component, OnInit, Input } from '@angular/core';
import { BaseControls } from '../base.controls';

@Component({
  selector: 'ngs-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class NgsCheckboxComponent extends BaseControls implements OnInit {

  @Input() labelPosition = 'after';
  @Input() indeterminate: boolean;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
