import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-task04',
  templateUrl: './task04.component.html',
  styleUrls: ['./task04.component.css']
})
export class Task04Component implements OnInit {
  form!: FormGroup;
  hobbies!: FormArray;
  emailErrorMessage: string = '';
  passwordErrorMessage: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      checkbox: [false, Validators.requiredTrue],
      hobbies: this.formBuilder.array([])
    });
  }

  ngOnInit() {
    this.hobbies = this.form.get('hobbies') as FormArray;
  }

  addHobby() {
    const hobbyControl = this.formBuilder.control('');
    this.hobbies.push(hobbyControl);
  }

  removeHobby(index: number) {
    this.hobbies.removeAt(index);
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = {
        email: this.form.value.email,
        password: this.form.value.password,
        checkbox: this.form.value.checkbox,
        hobbies: this.form.value.hobbies.filter((hobby: string) => hobby !== '')
      };
      console.log(formData);
      this.form.reset();
    } else {
      const emailControl = this.form.get('email') as FormControl;
      const passwordControl = this.form.get('password') as FormControl;

      this.emailErrorMessage = emailControl.hasError('required') ? 'Електронна пошта обов\'язкова' : emailControl.hasError('email') ? 'Неправильний формат електронної пошти' : '';
      this.passwordErrorMessage = passwordControl.hasError('required') ? 'Пароль обов\'язковий' : passwordControl.hasError('minlength') ? 'Пароль має містити щонайменше 8 символів' : '';
    }
  }

  isEmailInvalid() {
    const emailControl = this.form.get('email') as FormControl;
    return emailControl.touched && emailControl.invalid;
  }

  isPasswordInvalid() {
    const passwordControl = this.form.get('password') as FormControl;
    return passwordControl.touched && passwordControl.invalid;
  }
}
