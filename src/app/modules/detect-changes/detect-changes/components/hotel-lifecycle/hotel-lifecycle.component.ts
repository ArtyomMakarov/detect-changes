import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-lifecycle',
  templateUrl: './hotel-lifecycle.component.html',
  styleUrls: ['./hotel-lifecycle.component.scss']
})
export class HotelLifecycleComponent {

  public hotelName:string='California';

  private rooms:Array<{num:number,beds:number}>=[
    { num:22, beds:2 },
    { num:25, beds:1 },
    { num:28, beds:4 },
  ];

  private photo:string="http://fe.it-academy.by/Examples/Hotel/hotel1.jpg";

  constructor() {
    //setInterval(()=>{console.log('timer')},3000);
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
