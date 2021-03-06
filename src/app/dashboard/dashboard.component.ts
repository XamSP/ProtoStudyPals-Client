import { Component, OnInit, Input } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [SessionService]
})

export class DashboardComponent implements OnInit {
  // @Input() 
  user: any;
  error: string;
  privateData: any = '';
  myRoute: boolean = false;

  constructor(
    private router: Router,
    private session: SessionService
  ) {  }

  ngOnInit() {
    this.session.isLoggedIn()
    .subscribe(
      (user) => this.successCb(user)
    );    
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
