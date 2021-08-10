import { Component, ChangeDetectionStrategy, Input, DoCheck, OnChanges } from '@angular/core';

@Component({
  selector: 'app-hotel-stars-onpush',
  templateUrl: './hotel-stars-onpush.component.html',
  styleUrls: ['./hotel-stars-onpush.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelStarsOnpushComponent implements DoCheck, OnChanges {

  @Input() public stars1!: number;
  @Input() public stars2!: {cnt:number};

  public stars3: {cnt: number} = { cnt: 33 };

  ngDoCheck() {
    console.log('Stars DoCheck');
  }

  ngOnChanges() {
    console.log('Stars OnChanges');
  }

  inc3() {
    this.stars3.cnt++;
  }

  getStars() {
    console.log("stars-component вызван метод getStars");
    return 4;
  }

}
