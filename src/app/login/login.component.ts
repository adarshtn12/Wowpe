import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'user' && this.password === '1234') {
      this.router.navigate(["/payment"]);
    } else {
      this.error = 'Invalid credentials';
    }
  }
}
