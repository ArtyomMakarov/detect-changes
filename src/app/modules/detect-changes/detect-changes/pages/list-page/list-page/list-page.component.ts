import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  public arrItems = [
    {
      name: "tv",
      model: "LG"
    },
    {
      name: "phone",
      model: "Apple"
    },
    {
      name: "xerox",
      model: "Canon"
    },
    {
      name: "watch",
      model: "Samsung"
    },
    {
      name: "music column",
      model: "Marshall"
    },
  ];

  public displayedColumns: string[] = ['name', 'model', 'button'];

  constructor() { }

  ngOnInit(): void {
    console.log("list page is inited");
  }

  // ngDoCheck(): void {
  //   console.log("list page is checked");
  // }

}
