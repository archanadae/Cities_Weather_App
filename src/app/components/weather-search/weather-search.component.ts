import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../service/weather.service';
import { Weather } from '../../model/weather';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss'],
})
export class WeatherSearchComponent implements OnInit {
  constructor(private wearherservice: WeatherService) {}

  ngOnInit(): void {}

  onSubmit(formData: any) {
    this.wearherservice.searchWeatherData(formData.value.city).subscribe(
      (data) => {
        //console.log('response:' + data);
        const weatherItem = new Weather(
          data.name,
          data.weather[0].main,
          data.main.temp
        );
        this.wearherservice.addWeatherItem(weatherItem);
        //console.log("weather: "+weatherItem.)
      },
      (error) => {
        console.log('Error' + error);
      }
    );
    console.log('city is : ' + formData.value.city);
  }
}
