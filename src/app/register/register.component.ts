import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  errorMessage: string;
  successMessage: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  submitRegister(email: string, username: string, password: string, confirmPass: string) {
    if (confirmPass !== password) {
      this.errorMessage = `Password don't match!`;
    } else {
      this.userService.register(email, username, password).subscribe(resp => {
          this.successMessage = `Yehhh! Your account has been created successfully. You can now log-in`;
      }, error => {
        this.errorMessage = error.message;
      });
    }
  }
}
