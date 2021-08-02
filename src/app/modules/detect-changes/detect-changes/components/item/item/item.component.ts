import { Component, Input, OnInit, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: '[app-item]',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, DoCheck {
  @Input() public item!: {[key: string]: string};

  constructor() { }

  ngOnInit(): void {
    console.log(this.item.name + ' is inited');
  }

  ngDoCheck(): void {
    console.log(this.item.name + ' is checked');
  }

  public changeItem(): void {
    this.item = {
      name: "headphones",
      model: "Senhizer"
    }
  }

}
