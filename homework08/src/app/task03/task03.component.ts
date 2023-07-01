import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

interface FormData {
  email: string;
  password: string;
  checkbox: boolean;
  hobbies: string[];
}

@Component({
  selector: 'app-task03',
  templateUrl: './task03.component.html',
  styleUrls: ['./task03.component.css']
})
export class Task03Component implements OnInit {
  form: FormGroup;
  hobbyControls: FormControl[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      checkbox: [false, Validators.requiredTrue],
      hobbies: this.formBuilder.array([])
    });
  }

  ngOnInit() {
  }

  addHobby() {
    const hobby = this.formBuilder.control('');
    this.hobbyControls.push(hobby);
    this.hobbies.push(hobby);
  }

  removeHobby(index: number) {
    this.hobbyControls.splice(index, 1);
    this.hobbies.removeAt(index);
  }

  get hobbies() {
    return this.form.get('hobbies') as FormArray;
  }

  onSubmit() {
    if (this.form.valid) {
      const formData: FormData = {
        email: this.form.value.email,
        password: this.form.value.password,
        checkbox: this.form.value.checkbox,
        hobbies: (this.form.get('hobbies') as FormArray).value.filter((hobby: FormControl) => hobby.value !== '')
      };
      console.log(formData);
    }
  }
}
