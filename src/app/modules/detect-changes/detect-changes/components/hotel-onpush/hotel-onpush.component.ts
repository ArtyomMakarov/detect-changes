import { Component , ChangeDetectorRef, ApplicationRef, DoCheck, ChangeDetectionStrategy } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-hotel-onpush',
  templateUrl: './hotel-onpush.component.html',
  styleUrls: ['./hotel-onpush.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelOnpushComponent implements DoCheck {
  
  private hotelName:string='California';
  private fakeHotelName = '';

  private rooms:Array<{num:number,beds:number}>=[
    { num:22, beds:2 },
    { num:25, beds:1 },
    { num:28, beds:4 },
  ];

  private photo:string="http://fe.it-academy.by/Examples/Hotel/hotel1.jpg";

  public stars1:number=11;
  public stars2:{cnt:number}={cnt:22};

  // constructor(private changeDetector:ChangeDetectorRef) {
  // }
  //constructor(private appRef:ApplicationRef) {
  //}

  ngDoCheck() {
    console.log('Hotel DoCheck');
  }

  callObservable():void {
    const int = interval(2000);
    const newHotelName$ = int.pipe(
      take(5),
    )
    newHotelName$.subscribe(() => {
      console.log('Makar Land');
      this.fakeHotelName = 'Makar Land';
    });
  }

  inc1() {
    this.stars1++;
  }

  inc2() {
    this.stars2.cnt++;

    // это здесь не сработает - входное свойство [stars2] же ещё не обновилось
    //this.appRef.tick();
    //this.changeDetector.detectChanges();

    //а вот это уже сработает

    // setInterval(() => {
    //   this.stars2.cnt++;
    //   this.changeDetector.detectChanges();

    // },2000);
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

}
