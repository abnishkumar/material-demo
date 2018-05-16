import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { BaseControls } from '../base.controls';

@Component({
  selector: 'ngs-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})

export class NgsAutocompleteComponent extends BaseControls implements OnInit {

  @Input() public filterColumnName: string;
  @Input() public template: string;
  filteredData: Observable<any[]>;

  constructor() {
    super();
  }

  getTemplate(item: any) {
    let temp = this.template;
    Object.keys(item).forEach(keyItem => {
      const key = `{${keyItem}}`;
      temp = temp.replace(key, item[keyItem]);
    });
    return temp;
  }

  ngOnInit(): void {
    if (!this.template) {
      this.template = `<span>{${this.filterColumnName}}</span>`;
    }
    this.filteredData = this.control.valueChanges
      .pipe(
        startWith(''),
        map(val => val ? this.filterData(val) : this.dataSource.slice())
      );
  }

  private filterData(val: string) {
    return this.dataSource.filter(
      fData => fData[this.filterColumnName].toLowerCase().indexOf(val.toLowerCase()) !== -1);
  }

}
