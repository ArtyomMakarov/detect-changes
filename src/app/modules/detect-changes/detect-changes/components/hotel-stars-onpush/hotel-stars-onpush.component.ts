import { Component, ChangeDetectionStrategy, Input  } from '@angular/core';

@Component({
  selector: 'app-hotel-stars-onpush',
  templateUrl: './hotel-stars-onpush.component.html',
  styleUrls: ['./hotel-stars-onpush.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelStarsOnpushComponent {

  @Input() public stars1!: number;
  @Input() public stars2!: {cnt:number};

  public stars3: {cnt: number} = { cnt: 33 };

  inc3() {
    this.stars3.cnt++;
  }

}
