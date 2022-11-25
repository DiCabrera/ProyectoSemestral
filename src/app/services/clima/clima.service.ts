import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClimaService {
  constructor() {}
  getCurrentWheater(latitude: number, longitude: number) {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${environment.weather.key}&lang=sp&units=metric`
    ).then((res) => res.json());
  }
}
