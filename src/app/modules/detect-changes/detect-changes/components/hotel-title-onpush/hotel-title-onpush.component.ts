import { Component, Input, DoCheck } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-hotel-title-onpush',
  templateUrl: './hotel-title-onpush.component.html',
  styleUrls: ['./hotel-title-onpush.component.scss']
})
export class HotelTitleOnpushComponent implements DoCheck{

  @Input("hotel-name")
  private hotelName!: string;

  private fakeHotelName = '';

  ngDoCheck() {
    console.log('%c Title DoCheck', "color: red");
  }

  getName():string {
    return this.hotelName;
  }

  callObservable():void {
    const int = interval(2000);
    const newHotelName$ = int.pipe(
      take(5),
    )
    newHotelName$.subscribe(() => {
      console.log('%c Makar Land', "color: red");
      this.fakeHotelName = 'Makar Land';
    });
  }

}
