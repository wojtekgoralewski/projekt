import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {HttpClientModule} from '@angular/common/http';
import {WeatherService} from './services/weather.service';
import { WeatherComponent } from './weather/weather.component';
import { WeatherParentComponent } from './weather-parent/weather-parent.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { PollutionComponent } from './pollution/pollution.component';
import { FutureWeatherComponent } from './future-weather/future-weather.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import {MatMenuModule} from '@angular/material/menu';
import { CalendarComponent } from './calendar/calendar.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherParentComponent,
    PollutionComponent,
    FutureWeatherComponent,
    PersonalInformationComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    WeatherService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
