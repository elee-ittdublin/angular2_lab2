import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  kilometers : number = 10;
  miles : number = 15;

  constructor() { }

  KmToMiles() {
    this.miles = this.kilometers * 0.621371192237;
    //this.miles = this.kilometers * 0.621371192237;
  }

  MilesToKm() {
    this.kilometers = this.miles / 0.621371192237;
    //this.kilometers = this.miles / 0.621371192237; 
  }

  ngOnInit() {
  }

}
