import { Component, OnInit } from '@angular/core';
import { SessionService } from "../services/session.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers:[SessionService],
})
export class AuthComponent implements OnInit {
  formInfo:any = {
    username: '',
    password: ''
    
  };
  
  user: any;
  error: string;
  privateData: any = '';
  signupform: boolean;

  constructor(private router: Router, private session: SessionService) { }

  ngOnInit() {
    this.session.isLoggedIn()
      .subscribe(
        (user) => this.successCb(user)
      );

    
    this.signupform === false;   


    
  }

  signupFormDisplay(){
    if (this.signupform === true) {
      return this.signupform = false;
    } else {
      return this.signupform = true;
    }
  }

  login() {
    this.session.login(this.formInfo)
      .subscribe(
        (user) => this.successCb(user),
        (err) => this.errorCb(err)
      );
   }

  logout() {
    this.session.logout()
      .subscribe(
        () => this.successCb(null),
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
  }
}

// Pincho