import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgsAutocompleteComponent } from './autocomplete/autocomplete.component';
import { NgsCheckboxComponent } from './checkbox/checkbox.component';
import { NgsDatePickerComponent } from './datepicker/datepicker.component';
import { NgsTextboxComponent } from './textbox/textbox.component';
import { NgsSlideToggleComponent } from './slide-toggle/slide-toggle.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    BrowserAnimationsModule
  ],
  declarations: [
    NgsAutocompleteComponent, NgsTextboxComponent,
    NgsCheckboxComponent, NgsDatePickerComponent,
    NgsSlideToggleComponent],
  exports: [
    NgsAutocompleteComponent, NgsTextboxComponent, NgsCheckboxComponent, NgsDatePickerComponent, NgsSlideToggleComponent
  ]
})
export class ControlsModule { }

export * from './textbox/model/textbox.settings.model';
export { NgsAutocompleteComponent } from './autocomplete/autocomplete.component';
export { NgsCheckboxComponent } from './checkbox/checkbox.component';
export { NgsTextboxComponent } from './textbox/textbox.component';
export { NgsSlideToggleComponent } from './slide-toggle/slide-toggle.component';
