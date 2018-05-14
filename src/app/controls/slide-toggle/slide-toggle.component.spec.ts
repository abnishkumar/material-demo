import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgsSlideToggleComponent } from './slide-toggle.component';

describe('SlideToggleComponent', () => {
  let component: NgsSlideToggleComponent;
  let fixture: ComponentFixture<NgsSlideToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgsSlideToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgsSlideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
