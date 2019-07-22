import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-videos-can',
  templateUrl: './list-videos-can.component.html',
  styleUrls: ['./list-videos-can.component.css']
})
export class ListVideosCanComponent implements OnInit {
  displayedColumns: string[] = ['title', 'delete'];
  // dataSource = USER_DATA;
  // load data from service USER JSON



  constructor() { }

  ngOnInit() {
  }

}
