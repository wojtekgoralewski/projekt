import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherComponent } from './weather.component';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherComponent]
    });
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return formatted hour string', () => {
    const unixTimestamp = 1624096200; 
    const expectedHour = '11:50'; 

    const result = component.getHour(unixTimestamp);

    expect(result).toEqual(expectedHour);
  });

  it('should return the Polish day name', () => {
    const unixTimestamp = 1624096200; 
    const expectedDay = 'sobota'; 

    const result = component.getPolishDay(unixTimestamp);

    expect(result).toEqual(expectedDay);
  });

  it('should convert Kelvin to Celsius', () => {
    const kelvinTemperature = 300; 
    const expectedCelsius = '28'; 

    const result = component.kelvinToCelsius(kelvinTemperature);

    expect(result).toEqual(expectedCelsius);
  });
});
