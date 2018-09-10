import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { RetrieveSessionService } from '../services/retrieve-session.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-session-query-bar',
  templateUrl: './session-query-bar.component.html',
  styleUrls: ['./session-query-bar.component.css'],
  providers: [SessionService, RetrieveSessionService]
})
export class SessionQueryBarComponent implements OnInit {

  user: any;
  signupform: boolean;
  error: string;
  currentSession: any;
  subjectss: any;

  constructor(
    private _retrieveSession: RetrieveSessionService,
    private _session: SessionService
  ) { }

  ngOnInit() {
    this._session.isLoggedIn()
    .subscribe(
      (user) => this.successCb2(user)
    ); 
    
    this._retrieveSession.retrieveSubjects()
    .subscribe(
      (subject) => this.successCb(subject)
    );
  }

  successCb2(user) {
    this.user = user;
    this.error = null;
  }

  errorCb(err) {
    this.error = err;
    this.user = null;
    console.log(this.subjectss)
  }
  
  successCb(subjects) {
    this.subjectss = subjects;
    this.error = null;
    console.log(this.subjectss)
  }
}
