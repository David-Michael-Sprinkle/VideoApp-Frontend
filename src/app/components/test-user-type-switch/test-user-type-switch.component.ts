import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test-user-type-switch',
  templateUrl: './test-user-type-switch.component.html',
  styleUrls: ['./test-user-type-switch.component.css']
})
export class TestUserTypeSwitchComponent implements OnInit {

  constructor() { }

  userState = true;
  // canidate = true / manager = false

  ngOnInit() {
  }

  onClickMe() {
    this.userState = !this.userState;
  }
}
