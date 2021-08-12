import { Component, Input, SimpleChange, OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked
} from '@angular/core';

@Component({
  selector: 'app-hotel-title-lifecycle',
  templateUrl: './hotel-title-lifecycle.component.html',
  styleUrls: ['./hotel-title-lifecycle.component.scss']
})
export class HotelTitleLifecycleComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input("hotel-name")
  private hotelName!: string;

  getName():string {
    return this.hotelName;
  }

  ngOnInit():void {
    console.log("%c HotelTitleComponent::ngOnInit", "color: red");
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }):void {
    console.log("%c HotelTitleComponent::ngOnChanges", "color: red");
  }

  ngDoCheck():void {
    console.log("%c HotelTitleComponent::ngDoCheck", "color: red");
  }

  ngAfterContentInit():void {
    console.log("%c HotelTitleComponent::ngAfterContentInit", "color: red");
  }

  ngAfterContentChecked():void {
    console.log("%c HotelTitleComponent::ngAfterContentChecked", "color: red");
  }

  ngAfterViewInit():void {
    console.log("%c HotelTitleComponent::ngAfterViewInit", "color: red");
  }

  ngAfterViewChecked():void {
    console.log("%c HotelTitleComponent::ngAfterViewChecked", "color: red");
  }

}
