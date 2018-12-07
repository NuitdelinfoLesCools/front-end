import { Component, OnInit } from '@angular/core';

import { User } from '../models/User';
import { Alert } from '../models/Alert';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';
import { Mission } from '../models/Mission';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  currentUser?: User;
  alerts?: Alert[];
  missions?: Mission[];

  constructor(private authService: AuthenticationService, private userService: UserService) {
    this.authService.currentUser.subscribe(u => this.currentUser = u);
  }

  ngOnInit() {
    if (this.currentUser) {
      this.userService.getAlerts().subscribe(a => {
        this.alerts = a;
      });

      this.userService.getMissions().subscribe(m => {
        this.missions = m;
      });
    }
  }

  severityClass(severity: number) {
    return {
      'alert-info': severity === 0,
      'alert-secondary': severity === 1,
      'alert-warning': severity === 2,
      'alert-danger': severity === 3,
    };
  }
}
