import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{
  
  @Input() futureData: any;
  @Input() currentData: any;
  
  @Output()
  refreshEvent = new EventEmitter();

  constructor(
  ) {}

  onRefresh(): void{
    this.refreshEvent.emit();
  }

  getPolishDay(unixTimestamp: number): string {
    const date = new Date(unixTimestamp*1000);
    const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
    return date.toLocaleDateString('pl-PL', options);
  }

  getDay(unixTimestamp: number): string {
    const date = new Date(unixTimestamp*1000);
    return date.toLocaleDateString('pl-PL');
  }
  
  kelvinToCelsius(temp: number): string {
    const celsius = (temp -272).toFixed(0);
    return celsius
  }

  getFormattedTime(unixTimestamp: number): string {
    const date = new Date(unixTimestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedTime = `${this.padZero(hours)}:${this.padZero(minutes)}`;
    return formattedTime;
  }

  padZero(value: number): string {
    return value < 10 ? `0${value}` : value.toString();
  }

  getHour(unixTimestamp: number): string {
    const date = new Date(unixTimestamp*1000);
    const hours = date.getHours().toString().padStart(2,'0');
    const minutes = date.getMinutes().toString().padStart(2,'0');
    return `${hours}:${minutes}`;
  }

  ngOnInit(): void {
  
  }
}
