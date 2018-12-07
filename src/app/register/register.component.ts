import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  errorMessage: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  submitRegister(email: string, username: string, password: string, confirmPass: string) {
    if (confirmPass !== password) {
      this.errorMessage = `Password don't match!`;
    } else {
      this.userService.register(email, username, password).subscribe(resp => {
        console.log(resp);
      }, error => {
        this.errorMessage = error.message;
      });
    }
  }
}
