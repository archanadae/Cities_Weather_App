import { Injectable } from '@angular/core';
import { WEATHER_ITEMS } from '../model/weather.data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Operator } from 'rxjs';
import { Weather } from '../model/weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  Key = 'cdca4309c6f03a849eb2cbf8d4009ca6';
  constructor(private http: HttpClient) {}

  getWeatherItems() {
    return WEATHER_ITEMS;
  }

  addWeatherItem(weatherItem: Weather) {
    WEATHER_ITEMS.push(weatherItem);
  }

  searchWeatherData(cityname: string): Observable<any> {
    return this.http.get(
      'http://api.openweathermap.org/data/2.5/weather?q=' +
        cityname +
        '&appid=' +
        this.Key +
        '&units=metric'
    );
  }
}
