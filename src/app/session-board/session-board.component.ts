import { Component, OnInit, Input, Inject  } from '@angular/core';
import { SessionService } from '../services/session.service';
import { RetrieveSessionService } from '../services/retrieve-session.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-session-board',
  templateUrl: './session-board.component.html',
  styleUrls: ['./session-board.component.css'],
  providers:[SessionService, RetrieveSessionService]
})
export class SessionBoardComponent implements OnInit {

  myRoute: any;
  user: any;
  signupform: boolean;
  error: string;
  sessions: any;
  mySessions: any;
  subjectss: any;

  constructor(
    private _retrieveSession: RetrieveSessionService,
    private _session: SessionService,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() {
    this._retrieveSession.retrieveSession()
    .subscribe(
      (session) => this.successCb2(session)
    );

    console.log(this.document.location.href)

    if (this.document.location.href == "http://localhost:4200/sessions") {
      this._retrieveSession.retrieveMySession()
      .subscribe(
        (mySession) => this.successCb3(mySession)
      );
      

    }


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

  successCb3(mySession) {
    this.mySessions = mySession;
    this.error = null;
    console.log(this.mySessions)
  }

  joinSession(sessionId){
    this._retrieveSession.joinTheSession(sessionId).subscribe(
      (session) => console.log(session)
    );
  }
}
