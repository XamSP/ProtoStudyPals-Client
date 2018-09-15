import { Component, OnInit } from '@angular/core';
import { SessionService } from "../services/session.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[SessionService],
})
export class SignupComponent implements OnInit {

  formSignUp:any = {
    username: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    role: 'User',
    gender: '',
    age: '',
    location: {
        country: '',
        state: '',
        city: '',
        address: '',
        zipcode: ''
    },
    email: '',
    imgName: '',
    imgPath: '',
    rating: 4,
    about: '',
  };
  
  user: any;
  error: string;
  privateData: any = '';

  constructor(private router: Router, private session: SessionService) { }

  ngOnInit() {
  }

  signup() {
    this.session.signup(this.formSignUp)
      .subscribe(
        (user) => this.successCb(user),
        (err) => this.errorCb(err)
      );
  }

  getPrivateData() {
    this.session.getPrivateData()
      .subscribe(
        (data) => this.privateData = data,
        (err) => this.error = err
      );
  }

  errorCb(err) {
    this.error = err;
    this.user = null;
  }
  
  successCb(user) {
    this.user = user;
    this.error = null;
    if (this.user !== null) {
      this.router.navigate(['board'])
    }
  }

}
