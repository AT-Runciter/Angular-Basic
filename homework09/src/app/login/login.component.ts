import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public username!: string;
  public password!: string;
  public errorMessage!: string;

  constructor(private router: Router) { }

  onSubmit() {
    if ((this.username === 'Микола' && this.password === '1313') ||
        (this.username === 'Федір' && this.password === '0505')) {
      this.router.navigate(['/moderator', this.username]);
    } else {
      this.errorMessage = 'Неправильний логін або пароль';
    }
  }
}
