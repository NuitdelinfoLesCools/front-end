import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { User } from './models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Nuit Info 2018';
  menus = [
    {
      name: 'Home',
      link: ''
    },
    {
      name: 'Login',
      link: 'login',
      login: false
    },
    {
      name: 'Register',
      link: 'register',
      login: false
    },
    {
      name: 'Required stuff',
      link: 'required-stuff',
      login: true
    },
    {
      name: 'Weather',
      link: 'weather',
      login: true
    },
    {
      name: 'Logout',
      link: 'logout',
      login: true
    }
  ];

  currentLink = '';
  currentUser?: User;

  constructor(private authService: AuthenticationService, private router: Router) {
    this.authService.currentUser.subscribe(u => this.currentUser = u);
  }

  getFilteredMenu() {
    if (this.currentUser) {
      return this.menus.filter(m => m.login !== false);
    }
    return this.menus.filter(m => m.login !== true);
  }

  navigateTo(link: string) {
    if (link === 'logout') {
      this.authService.logout();
      link = '';
    }
    this.currentLink = link;
    this.router.navigate([link]);
  }
}
