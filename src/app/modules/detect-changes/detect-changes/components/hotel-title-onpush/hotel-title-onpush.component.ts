import { Component, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-hotel-title-onpush',
  templateUrl: './hotel-title-onpush.component.html',
  styleUrls: ['./hotel-title-onpush.component.scss']
})
export class HotelTitleOnpushComponent implements DoCheck{

  @Input("hotel-name")
  private hotelName!: string;

  ngDoCheck() {
    console.log('Title DoCheck');
  }

  getName():string {
    return this.hotelName;
  }

}
