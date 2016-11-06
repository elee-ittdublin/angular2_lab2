import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.component.html',
  styleUrls: ['./show-message.component.css']
})
export class ShowMessageComponent implements OnInit {
  // Declare and initialise a String
  clickMessage: string = "";

  constructor() { }

  // This method handles the button click
  // Sets the clickMessage property = text input
  // No validation - bad idea!
  onClickMe(myMessage: string) {
    this.clickMessage = myMessage;
  }

  ngOnInit() {
  }
}

