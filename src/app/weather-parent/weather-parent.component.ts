import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../services/weather.service';
import { MatFormFieldModule } from '@angular/material/form-field';



@Component({
  selector: 'app-weather-parent',
  templateUrl: './weather-parent.component.html',
  styleUrls: ['./weather-parent.component.css']
})
export class WeatherParentComponent implements OnInit {
  futureData: any;
  futureDataObjects: any;
  groupedObjects: any;
  currentData: any;
  pollutionData: any;
  city: any;
  isShow = false;
  isClicked = false;
  constructor(
    private weatherService: WeatherService
  ) {}

  checkFutureWeather(): void{
    this.weatherService.getFutureWeather(this.city).subscribe(data => {(this.futureData = data);
    this.futureDataObjects = this.futureData.list;
    console.log(this.futureDataObjects);
    console.log(this.futureData);
    this.groupObjectsByDate();
    console.log(this.groupedObjects);
    });
  }

  groupObjectsByDate(){
    const groupedObjects = {};
    for (const obj of this.futureDataObjects){
      const date = new Date(obj.dt * 1000).toLocaleDateString();
      if (groupedObjects[date]) {
        groupedObjects[date].push(obj);
      } else {
        groupedObjects[date] = [obj];
      }
    }
    this.groupedObjects =  Object.values(groupedObjects);
  }
  checkCurretWeather(): void{
    this.weatherService.getCurrentWeather(this.city).subscribe(data =>{(this.currentData = data);
    console.log(this.currentData)});
  }

  checkPollution(): void{
    const lat = this.currentData?.coord?.lat;
    const lon = this.currentData?.coord?.lon;
    this.weatherService.getPollutionData(lat, lon).subscribe(
      d => {(this.pollutionData = d); console.log(this.pollutionData);})
  }

  showButtons(): void{
    this.isShow = !this.isShow;
  }
  showTitle(): void{
    this.isClicked = !this.isClicked;
  }

  onRefresh(): void{
    this.checkCurretWeather();
  }
  ngOnInit(): void {
    //this.checkFutureWeather();
    //this.checkCurretWeather();
    //this.checkFutureWeather();
  }
}
