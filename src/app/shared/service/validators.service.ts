import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {
  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  public cantBePepito = (control: FormControl): ValidationErrors | null => {
    const value: string = control.value.trim().toLowerCase();

    if (value === 'pepito') {
      return {
        noPepito: true,
      };
    }

    return null;
  };

  public isValidField(form: FormGroup, field: string): boolean | null {
    /*  check if a specific form field has errors and has been touched by the user. */
    return form.controls[field].errors && form.controls[field].touched;
  }
  isFieldOneEqualFieldTwo(field1: string, field2: string) {
    return (formGroup: FormGroup): ValidationErrors | null => {
      const fieldValue1 = formGroup.get(field1)?.value;
      const fieldValue2 = formGroup.get(field2)?.value;

      if (fieldValue1 !== fieldValue2) {
        formGroup.get(field2)?.setErrors({ notEqual: true });
        return { notEqual: true };
      }
      formGroup.get(field2)?.setErrors(null);

      return null;
    };
  }
}
