import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClimaService {
  constructor() {}
  getCurrentWheater(latitude: number, longitude: number) {
    const url =  `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${environment.weather.key}&lang=sp&units=metric`;
    console.log({ url });
    return fetch(
     url
    ).then((res) => res.json());
  }
}
