import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
