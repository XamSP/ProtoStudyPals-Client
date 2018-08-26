import { Component, OnInit, Input } from '@angular/core';
import { SessionService } from '../services/session.service';
import { RetrieveSessionService } from '../services/retrieve-session.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.css'],
  providers: [SessionService, RetrieveSessionService]
})
export class SessionFormComponent implements OnInit {
  @Input() user: any;
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
  };

  constructor(
    private _retrieveSession: RetrieveSessionService,
  ) { }

  ngOnInit() {
    console.log(this._retrieveSession.retrieveSubjects()
    .subscribe(
      (subject) => this.successCb(subject)
    ))
    
    this._retrieveSession.retrieveSubjects()
    .subscribe(
      (subject) => this.successCb(subject)
    );
  }

  postSession() {
    this._retrieveSession.createSession(this.formSession, this.user)
      .subscribe(
        (session) => this.currentSession = session
      );
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
