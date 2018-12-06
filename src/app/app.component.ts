import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Nuit Info 2018';
  menus = [
    {
      name: 'home',
      link: ''
    },
    {
      name: 'login',
      link: 'login'
    },
    {
      name: 'register',
      link: 'register'
    }
  ];
}
