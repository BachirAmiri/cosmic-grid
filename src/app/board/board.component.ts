import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit, OnChanges {
  constructor() {}

  ngOnChanges(): void {
    this.items = new Array(this.sideSize * this.sideSize).fill(null);
  }

  items = new Array(this.sideSize * this.sideSize).fill(null);
  @Input() receivedSize: number;

  ngOnInit(): void {
    console.log(this.getPercentage());
  }

  get sideSize() {
    console.log(this.receivedSize);
    return this.receivedSize !== undefined ? this.receivedSize : 6;
  }

  getPercentage() {
    return 100 / this.sideSize + '%';
  }
}
