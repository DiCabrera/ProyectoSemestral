import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../../services/clima/clima.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {
  city = 'Santiago';
  hasPermission = false;
  latitude: number;
  longitude: number;
  temp: number;
  statusDescription: string;
  weatherLoaded: boolean;
  constructor(private weatherService: ClimaService) {
    navigator.geolocation.getCurrentPosition(
      (geo) => this.geoLocationSuccess(geo),
      (err) => this.geoLocationError(err)
    );
  }
  geoLocationSuccess(geo) {
    this.hasPermission = true;
    this.latitude = geo.coords.latitude;
    this.longitude = geo.coords.longitude;
    this.loadWeather();
  }
  loadWeather() {
    this.weatherLoaded = false;
    this.weatherService
      .getCurrentWheater(this.latitude, this.longitude)
      .then((res) => {
        console.log(res);
        this.city = res.name;
        this.temp = res.main.temp;
        this.statusDescription = res.weather[0]?.description.toUpperCase();
        this.weatherLoaded = true;
      });
  }
  geoLocationError(r) {
    this.hasPermission = false;
  }
  ngOnInit() {}
}
