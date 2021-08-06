import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-title-onpush',
  templateUrl: './hotel-title-onpush.component.html',
  styleUrls: ['./hotel-title-onpush.component.scss']
})
export class HotelTitleOnpushComponent {

  @Input("hotel-name")
  private hotelName!: string;

  getName():string {
    return this.hotelName;
  }

}
