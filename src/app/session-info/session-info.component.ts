import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import { RetrieveSessionService } from '../services/retrieve-session.service';


@Component({
  selector: 'app-session-info',
  templateUrl: './session-info.component.html',
  styleUrls: ['./session-info.component.css'],
  providers: [SessionService, RetrieveSessionService]
})
export class SessionInfoComponent implements OnInit {
  user: any;
  error: string;
  sessions: any;
  subjectss: any;

  constructor(
    private _retrieveSession: RetrieveSessionService,
    private _session: SessionService,
    private router: Router,

  ) { }

  ngOnInit() {
    this._retrieveSession.retrieveSession()
    .subscribe(
      (session) => this.successCb2(session)
    );

    this._session.isLoggedIn()
    .subscribe(
      (user) => this.successCb(user)
    ); 
  }

  errorCb(err) {
    this.error = err;
    this.user = null;
    console.log(this.subjectss)
  }
  
  successCb(user) {
    this.user = user;
    this.error = null;
  }

  successCb2(session) {
    this.sessions = session;
    this.error = null;
    console.log(this.sessions)
  }

  goToProfile(id){
    this.router.navigate(['profile', id])
  }
}
