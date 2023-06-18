import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(
    private http: HttpClient
  ) { }

  API_KEY = '0803c6c86e5859158a69011934b96ed7';
  
  getFutureWeather(cityName): any{
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${this.API_KEY}`
    );
  }

  getCurrentWeather(cityName): any{
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.API_KEY}`);
  }

  getPollutionData(lat,lon): any{
    return this.http.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${this.API_KEY}`)
  }
}

