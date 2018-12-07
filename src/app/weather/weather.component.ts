import { Component, OnInit } from '@angular/core';
import { Weather } from '../models/Weather';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.less']
})
export class WeatherComponent implements OnInit {

  weathers: Weather[];

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather().subscribe(w => {
      this.weathers = w;
    });
  }
}
