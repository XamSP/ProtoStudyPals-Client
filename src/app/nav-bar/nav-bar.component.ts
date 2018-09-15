import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers: [SessionService]
})
export class NavBarComponent implements OnInit {

  user: any;
  error: string;

  constructor(
    private _location: Location,
    private router: Router,
    private session: SessionService

  ) { }

  ngOnInit() {
    this.session.isLoggedIn()
    .subscribe(
      (user) => this.successCb(user)
    );
  }

  backClicked() {
    this._location.back();
  }

  viewMsgs(){
    this.router.navigate(['messenger']);
  }

  viewSessions(){
    this.router.navigate(['sessions']);
  }

  viewProfile(id){
    this.router.navigate(['profile', id]);
  }

  logout() {
    this.session.logout()
      .subscribe(
        () => this.successCb(null),
        (err) => this.errorCb(err)
      );
  }

  errorCb(err) {
    this.error = err;
    this.user = null;
  }
  
  successCb(user) {
    this.user = user;
    this.error = null;
    if(this.user == null) {
      this.router.navigate([''])
    }
  }

}
