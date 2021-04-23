import { Component, OnInit } from '@angular/core';
import { WEATHER_ITEMS } from 'src/app/model/weather.data';
import { WeatherService } from 'src/app/service/weather.service';
import { Weather } from '../../model/weather';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit {

  weatherItems: Weather[] =[];
  
  constructor(private weatherservice : WeatherService ) { }

  ngOnInit() : any {
    this.weatherItems = this.weatherservice.getWeatherItems();

  }

}
