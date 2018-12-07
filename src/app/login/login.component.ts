import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  errorMessage?: string;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  submitLogin(username: string, password: string) {
    this.authService.login(username, password).pipe(first()).subscribe(data => {
      this.router.navigate(['/']);
    },
    error => {
      console.log(error);
      this.errorMessage = error.message;
    });
  }
}
