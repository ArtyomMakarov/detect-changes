import { Component, OnInit, DoCheck } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-hotel-default',
  templateUrl: './hotel-default.component.html',
  styleUrls: ['./hotel-default.component.scss']
})
export class HotelDefaultComponent implements OnInit, DoCheck{

  private hotelName:string='California';
  private fakeHotelName = '';

  private rooms:Array<{num:number,beds:number}>=[
    { num:22, beds:2 },
    { num:25, beds:1 },
    { num:28, beds:4 },
  ];

  private photo:string="http://fe.it-academy.by/Examples/Hotel/hotel1.jpg";

  private stars:number=4;

  ngOnInit() {
    //call observable
    // this.callObservable();
  }

  ngDoCheck() {
    console.log('Hotel DoCheck');
  }

  callObservable():void {
    const int = interval(2000);
    const newHotelName$ = int.pipe(
      take(5),
    );
    
    newHotelName$.subscribe(() => {
      console.log('Makar Land');
      this.fakeHotelName = 'Makar Land';
    });
  }

  getName():string {
    return this.hotelName;
  }

  getRooms():string {
    return this.rooms
      .map( room => "N"+room.num+"("+room.beds+"b)" )
      .join("\n")
      ;
  };

  getPhoto():string {
    return this.photo;
  };

  getStars():number {
    return this.stars;
  };

}
