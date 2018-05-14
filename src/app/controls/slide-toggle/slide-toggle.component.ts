import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngs-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss']
})
export class NgsSlideToggleComponent implements OnInit {

   @Input() public checked: boolean;
  constructor() { }

  ngOnInit() {
  }

}
