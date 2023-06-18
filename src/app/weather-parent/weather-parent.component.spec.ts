import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherParentComponent } from './weather-parent.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {WeatherComponent} from '../weather/weather.component'
import { PollutionComponent } from '../pollution/pollution.component';
import {MatDividerModule} from '@angular/material/divider';
import { FutureWeatherComponent } from '../future-weather/future-weather.component';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('WeatherParentComponent', () => {
  let component: WeatherParentComponent;
  let fixture: ComponentFixture<WeatherParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        FormsModule,
        MatFormFieldModule,
        MatDividerModule,
        MatInputModule,
        BrowserAnimationsModule],
      declarations: [WeatherParentComponent, WeatherComponent, PollutionComponent,FutureWeatherComponent]
    });
    fixture = TestBed.createComponent(WeatherParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
