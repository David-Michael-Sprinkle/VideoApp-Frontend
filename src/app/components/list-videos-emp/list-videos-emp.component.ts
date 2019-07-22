import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { UserService } from 'src/app/services/user.service';
import { Link } from 'src/app/Link';

@Component({
  selector: 'app-list-videos-emp',
  templateUrl: './list-videos-emp.component.html',
  styleUrls: ['./list-videos-emp.component.css']
})
export class ListVideosEmpComponent implements OnInit {
  userid = 1; // set by outside of project scope
  currentUser: User;


  constructor(private userService: UserService) {
   }

  ngOnInit() {
    this.getUser(1);
  }
  getUser(userid): void {
    this.userService.getUser(userid)
    .subscribe( loadUser => {
      this.currentUser = loadUser;
    });
  }
}
