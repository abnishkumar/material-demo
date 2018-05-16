import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgsDropDownComponent } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: NgsDropDownComponent;
  let fixture: ComponentFixture<NgsDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgsDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgsDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
