import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonalInformationComponent} from '../app/personal-information/personal-information.component'
import {WeatherParentComponent} from '../app/weather-parent/weather-parent.component'
import {CalendarComponent} from '../app/calendar/calendar.component'

const routes: Routes = [
  {
    path: '',
    component: WeatherParentComponent 
  },
  {
    path: 'personal-information',
    component: PersonalInformationComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
