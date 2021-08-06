import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-title-default',
  templateUrl: './hotel-title-default.component.html',
  styleUrls: ['./hotel-title-default.component.scss']
})
export class HotelTitleDefaultComponent {

  @Input("hotel-name")
  private hotelName!:string;

  getName():string {
    return this.hotelName;
  }

  log():void {
    console.log("hotel-title: вызван метод log");
  }

}
