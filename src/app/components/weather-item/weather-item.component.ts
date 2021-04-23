import { Component, OnInit, Input } from '@angular/core';
import { Weather } from '../../model/weather';


@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss'],
})
export class WeatherItemComponent implements OnInit {
  @Input('item') public weatherItem: Weather = new Weather('', '', 0);
  @Input() city: string = '';
  //public weather: Weather;

  constructor() {}

  ngOnInit(): void {
  
}
}
