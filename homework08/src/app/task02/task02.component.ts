import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-task02',
  templateUrl: './task02.component.html',
  styleUrls: ['./task02.component.css'],
})
export class Task02Component implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get email(): AbstractControl | null {
    return this.loginForm.get('email');
  }

  get password(): AbstractControl | null {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const email = this.email?.value;
    const password = this.password?.value;

    if (email && password) {
      const formData = { email, password };
      console.log(JSON.stringify(formData));
    }
  }

  isEmailInvalidAndTouched() {
    return this.email?.errors?.['required'] && (this.email.dirty || this.email.touched);
  }

  isEmailInvalidFormat() {
    return this.email?.errors?.['email'] && (this.email.dirty || this.email.touched);
  }

  isPasswordInvalidAndTouched() {
    return this.password?.errors?.['required'] && (this.password.dirty || this.password.touched);
  }
}
