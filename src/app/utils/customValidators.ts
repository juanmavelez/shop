import { AbstractControl } from '@angular/forms';

export class MyValidators {
  static isPriceValid(
    abstractControl: AbstractControl
  ): { price_invalid?: boolean } {
    const value = abstractControl.value;
    if (value > 10000) {
      return { price_invalid: true };
    }
    return null;
  }
}
