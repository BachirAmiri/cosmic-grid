import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  title = 'COSMIC GRID';
  size : number;

  ngOnInit(): void {
    this.size = 6;
  }

  options: Options = {
    floor: 1,
    ceil: 10,
    step: 1,
    showTicks: true,
    showTicksValues: true,
    getPointerColor: (): string => {
      return '#A16EFF';
    }
  };
}
