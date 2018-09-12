import { Component, OnInit, Input } from '@angular/core';
import { SessionService } from '../services/session.service';
import { RetrieveSessionService } from '../services/retrieve-session.service';


@Component({
  selector: 'app-session-board',
  templateUrl: './session-board.component.html',
  styleUrls: ['./session-board.component.css'],
  providers:[SessionService, RetrieveSessionService]
})
export class SessionBoardComponent implements OnInit {

  user: any;
  signupform: boolean;
  error: string;
  sessions: any;
  subjectss: any;

  constructor(
    private _retrieveSession: RetrieveSessionService,
    private _session: SessionService
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

  joinSession(sessionId){
    this._retrieveSession.joinTheSession(sessionId).subscribe(
      (session) => console.log(session)
    );
  }
}
