import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
// import { FileSelectDirective } from "ng2-file-upload";

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css'],
  providers: [SessionService]
})
export class ProfileEditComponent implements OnInit {

  // uploader: FileUploader = new FileUploader({
  //   url: `/phones/`
  // });

  formSignUp:any = {
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    age: '',
    location: {
        country: '',
        state: '',
        city: '',
        address: '',
        zipcode: ''
    },
    email: '',
    // imgName: '',
    // imgPath: '',
    about: '',
  };

  user: any;
  error: string;
  privateData: any = '';
  
  constructor(private session: SessionService) { }

  ngOnInit() {
    this.session.isLoggedIn()
    .subscribe(
      (user) => this.successCb(user)
    );
  }

  //
  
  errorCb(err) {
    this.error = err;
    this.user = null;
  }
  
  successCb(user) {
    this.user = user;
    this.error = null;
  }

}
