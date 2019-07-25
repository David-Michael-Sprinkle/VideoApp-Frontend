import { Component, OnInit} from '@angular/core';
import { Validators, FormControl, FormGroup} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.css']
})
export class AddLinkComponent implements OnInit {
  userid = 1;
  currentUser: User;

  newLink: string;
  oEmbed: string;
  title: string;
  validViemo = '.*(?:vimeo.com\/)([^#\&\?]*).*';
  validYoutube = '.*(?:youtu.be\/)([^#\&\?]*).*';
  videoCode = '';
  addLinkForm = new FormGroup({
    title: new FormControl('', Validators.required),
    oEmbed: new FormControl('', Validators.pattern(this.validYoutube || this.validViemo)),
  });


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

  getErrorMessage() {
    return this.addLinkForm.hasError('required') ? 'You must enter a value' :
        this.addLinkForm.hasError('pattern') ? 'Not a valid link' :
            '';
  }

  updateLink() {
    this.addLinkForm.patchValue({
      oEmbed: this.newLink
    });
    console.log(this.addLinkForm.value);
  }

  onSubmit() {
    this.typeOfLink();
    this.updateLink();
    console.warn(this.addLinkForm.value);
    console.warn(JSON.stringify(this.addLinkForm.value));
    this.userService.addLink(this.userid, this.addLinkForm.value)
    .subscribe(loadUser => this.currentUser = loadUser);
    // TODO: output updated form data to service
  }

  typeOfLink() {
    if (this.addLinkForm.value.oEmbed.includes('youtu.be/')) {this.createYouTubeLink();
    }
    if (this.addLinkForm.value.oEmbed.includes('vimeo.com/')) {this.createVimeoLink();
    } else {
      console.log('something went wrong');
     }
  }

  createYouTubeLink() {
    // https://youtu.be/34Na4j8AVgA'
    // split from "youtu.be/"
    // copy value behind .be/s
    this.videoCode = this.addLinkForm.value.oEmbed.split('youtu.be/')[1]; // copy value behind .be/
    // concat with string
    this.newLink = 'https://www.youtube.com/embed/' + this.videoCode;
    // end form for youtube https://www.youtube.com/embed/34Na4j8AVgA
    return this.newLink;
}
    createVimeoLink() {
  // start form form viemo: https://vimeo.com/342770360
  // split from "vimeo.com/"
  // copy value behind .be/
  this.videoCode = this.addLinkForm.value.oEmbed.split('vimeo.com/')[1]; // copy value behind .com/
  // concat with string
  this.newLink = 'https://player.vimeo.com/video/' + this.videoCode;
  // end form for viemo: https://player.vimeo.com/video/342770360
  return this.newLink;
    }

}