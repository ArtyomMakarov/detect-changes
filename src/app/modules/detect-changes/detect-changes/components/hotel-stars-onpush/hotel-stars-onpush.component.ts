import { Component, ChangeDetectionStrategy, Input, DoCheck, OnChanges } from "@angular/core";

@Component({
  selector: "app-hotel-stars-onpush",
  templateUrl: "./hotel-stars-onpush.component.html",
  styleUrls: ["./hotel-stars-onpush.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelStarsOnpushComponent implements DoCheck, OnChanges {

  @Input() public stars1!: number;
  @Input() public stars2!: {cnt:number};

  public stars3: {cnt: number} = { cnt: 33 };

  ngDoCheck() {
    console.log("%c Stars DoCheck", "color: green");
  }

  ngOnChanges() {
    console.log("%c Stars OnChanges", "color: green");
  }

  inc3() {
    this.stars3.cnt++;
  }

  getStars() {
    console.log("%c stars-component вызван метод getStars", "color: green");
    return 4;
  }

}
