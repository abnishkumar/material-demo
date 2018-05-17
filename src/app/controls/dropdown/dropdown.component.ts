import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseControls } from '../base.controls';

@Component({
  selector: 'ngs-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class NgsDropDownComponent extends BaseControls implements OnInit {

  @Input() public multipleSelection = false;
  @Input() public groupOption = false;
  @Input() public defaultOption :string;
  @Output() public onItemSelection: EventEmitter<any> = new EventEmitter<any>();
  @Output() public change: EventEmitter<any> = new EventEmitter<any>();

  // MatOption
  constructor() {
    super();
  }

  ngOnInit() {

  }


  onSelection($event): void {
    this.onItemSelection.emit($event);
  }

  onChange($event: any): void {
    this.change.emit($event);
  }
  onBlur(): void {
    if (this.control) {
      this.control.markAsTouched();
      this.control.updateValueAndValidity();
    }
  }
}
