import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const rtx5090 = {
  name: 'RTX 5090',
  price: 2500,
  inStorage: 2,
};

@Component({
  templateUrl: './basic-page.component.html',
  styles: [],
})
export class BasicPageComponent implements OnInit {
  // formulario sin FormBuilder
  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // })

  //con FormBuilder
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.reset(rtx5090);
  }

  onSave(): void {
    /* The line `if (this.myForm.invalid) return;` is checking if the form is invalid. If the form is
    invalid, it will immediately return from the function without executing any further code. This
    is typically used to prevent the form from being submitted or any further actions from being
    taken if the form is not valid. */
    if (this.myForm.invalid) return;
    console.log(this.myForm.value);
    /* `this.myForm.reset({price:10,inStorage:0});` is resetting the form to its initial state. It sets
    the values of the form controls `price` and `inStorage` to 10 and 0 respectively. This is useful
    for scenarios where you want to reset the form after it has been submitted or when you want to
    clear the form values. */
    this.myForm.reset({ price: 0, inStorage: 0 });
  }
}
