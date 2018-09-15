import { Component, OnInit, Input } from '@angular/core';
import { SessionService } from '../services/session.service';
import { RetrieveSessionService } from '../services/retrieve-session.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.css'],
  providers: [SessionService, RetrieveSessionService]
})
export class SessionFormComponent implements OnInit {
  user: any;
  signupform: boolean;
  error: string;
  currentSession: any;
  subjectss: any;

  formSession:any = {
    title: '',
    subject: '',
    description: '',
    level: '',
    location: {
      country: '',
      state: '',
      city: '',
      address: '',
      zipcode: ''
    },
    dateOfSession: ''
  };

  constructor(
    private _retrieveSession: RetrieveSessionService,
    private _session: SessionService,
    private router: Router,
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

  postSession() {
    this._retrieveSession.createSession(this.formSession, this.user)
      .subscribe(
        (session) => {this.currentSession = session
        this.router.navigate(['sessions'])
        });
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
