import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, delay, of, pipe } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidator implements AsyncValidator {
  constructor() {}
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;
    console.log({ email });

    const httpCallObservable = new Observable<ValidationErrors | null>(
      (subscriber) => {
        console.log({ email });
        if (email === 'fernando@google.com') {
          subscriber.next({ emailTaken: true });
          subscriber.complete();
        }
        subscriber.next(null);
        subscriber.complete();
      }
    ).pipe(delay(3000));
    return httpCallObservable;
  }
}
