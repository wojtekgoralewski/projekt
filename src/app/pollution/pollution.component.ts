import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-pollution',
  templateUrl: './pollution.component.html',
  styleUrls: ['./pollution.component.css']
})
export class PollutionComponent implements OnInit{

  @Input() pollutionData: any;
  color: string = 'White';

  constructor(
  ){}
  
  checkAirEvaluation(id: number): string{
    let napis: string;
    const evaluation = this.pollutionData.list[0].main?.aqi;
    switch(evaluation){
      case 1:
        napis = 'Bardzo dobra jakość powietrza';
        this.color = 'LawnGreen';
        break;
      case 2:
        napis = 'Dobra jakość powietrza';
        this.color = 'GreenYellow';
        break;
      case 3:
        napis = 'Umiarkowana jakość powietrza';
        this.color = 'Orange';
        break;
      case 4:
        napis = 'Zła jakość powietrza';
        this.color = 'Tomato';
        break;
      case 5:
        napis = 'Okropna jakość powietrza';
        this.color = 'Red';
        break;
      default:
        napis = 'Brak infomacji o ocenie powietrza :[';
        break;
    }
    return napis;
  }

  ngOnInit(): void {
  
  }
}
