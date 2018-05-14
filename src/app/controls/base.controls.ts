import { FormControl, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { Input } from '@angular/core';

export class BaseControls {
  @Input() public control: FormControl;
  @Input() public label: string;
  @Input() public allowClear = true;
  // Theme color palette for the component.
  @Input() public color = 'primary';
  @Input() labelPosition = 'after';
  showClear: boolean;

  constructor() {
  }

  clear(): void {
    this.control.reset();
    this.control.markAsTouched();
  }

  onFocus(): void {
    this.showClear = this.allowClear;
  }

  onBlur() {
    if (this.allowClear) {
      setTimeout(() => {
        this.showClear = false;
      }, 200);
    }
  }

  getLabel(): string {
    return this.hasValidatorRequired() ? `${this.label} *` : this.label;
  }

  private hasValidatorRequired(): boolean {
    const validatorFn: ValidatorFn = this.control.validator;
    if (validatorFn) {
      const validationErrors: ValidationErrors = validatorFn({} as AbstractControl);
      if (validationErrors && validationErrors.required) {
        return true;
      }
    }
    return false;
  }
}
