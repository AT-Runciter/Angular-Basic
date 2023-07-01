import { Component } from '@angular/core';

@Component({
  selector: 'app-task01',
  templateUrl: './task01.component.html',
  styleUrls: ['./task01.component.css']
})
export class Task01Component {
  email!: string;
  password!: string;

  onSubmit() {
    const formData = { email: this.email, password: this.password };
    console.log(JSON.stringify(formData));
  }
}
