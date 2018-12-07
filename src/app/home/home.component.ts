import { Component, OnInit } from '@angular/core';

import { User } from '../models/User';
import { Alert } from '../models/Alert';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';
import { Mission } from '../models/Mission';
import { tileLayer, latLng, marker } from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  currentUser?: User;
  alerts?: Alert[];
  missions?: Mission[];

  // map option
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 20, attribution: '...' })
    ],
    zoom: 10,
  };

  mapCenter = latLng(0, 0);

  layers = [
    marker([ 46.879966, -121.726909 ])
  ];

  noPosition = false;

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

      this.userService.getPos().subscribe(pos => {
        pos.forEach(p => this.layers.push(marker([ p.lat, p.lon ])));
      });

      if (navigator.geolocation) {
        navigator.geolocation.watchPosition((position) => {
          this.showTrackingPosition(position);
        });
      } else {
        this.noPosition = true;
      }
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

  showTrackingPosition(position) {
    this.mapCenter = latLng(position.coords.latitude, position.coords.longitude);
    this.layers.push(marker([ position.coords.latitude, position.coords.longitude ]));
    this.userService.updatePos(position.coords.latitude, position.coords.longitude);
  }
}
