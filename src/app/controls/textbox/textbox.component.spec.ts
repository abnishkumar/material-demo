import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgsTextboxComponent } from './textbox.component';

describe('TextboxComponent', () => {
  let component: NgsTextboxComponent;
  let fixture: ComponentFixture<NgsTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgsTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgsTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
