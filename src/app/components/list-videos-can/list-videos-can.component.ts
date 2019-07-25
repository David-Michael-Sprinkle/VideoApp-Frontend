import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/User';
import { MatDialog } from '@angular/material/dialog';
import { AddLinkComponent } from '../add-link/add-link.component';
import { Router, RouterLink } from '@angular/router';




@Component({
  selector: 'app-list-videos-can',
  templateUrl: './list-videos-can.component.html',
  styleUrls: ['./list-videos-can.component.css']
})
export class ListVideosCanComponent implements OnInit {
  displayedColumns: string[] = ['title', 'delete'];
  // dataSource = USER_DATA;
  // load data from service USER JSON
  userid = 1;
  currentUser: User;
  

  constructor(private userService: UserService, public dialog: MatDialog, public router: Router) { }

  ngOnInit() {
    this.getUser(1);
  }

  getUser(userid): void {
    this.userService.getUser(userid)
    .subscribe( loadUser => {
      this.currentUser = loadUser;
    });
  }
  deleteLink(link: number) {
    this.userService.deleteLink(this.currentUser.userid, link).subscribe(loadUser => this.currentUser = loadUser);
    console.log('deleted link number ' + link);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddLinkComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(()=> {this.ngOnInit()});
  }
}