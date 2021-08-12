import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-hotel-stars-default',
  templateUrl: './hotel-stars-default.component.html',
  styleUrls: ['./hotel-stars-default.component.scss']
})
export class HotelStarsDefaultComponent implements DoCheck {

  ngDoCheck() {
    console.log("%c Stars DoCheck", "color: green");
  }

  getStars():number {
    console.log("%c hotel-stars - вызван метод getStars", "color: green");
    return 5;
  }
}
