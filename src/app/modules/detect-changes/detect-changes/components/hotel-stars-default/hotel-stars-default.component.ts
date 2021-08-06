import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-stars-default',
  templateUrl: './hotel-stars-default.component.html',
  styleUrls: ['./hotel-stars-default.component.scss']
})
export class HotelStarsDefaultComponent {

  getStars():number {
    console.log("hotel-stars - вызван метод getStars");
    return 5;
  }
}
