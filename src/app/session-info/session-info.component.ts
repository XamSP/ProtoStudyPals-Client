import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import { RetrieveSessionService } from '../services/retrieve-session.service';
import { ActivatedRoute } from '@angular/router';


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
  Id: any;
  joinCondition: boolean;

  constructor(
    private _retrieveSession: RetrieveSessionService,
    private _session: SessionService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    this._session.isLoggedIn()
    .subscribe(
      (user) => {this.successCb(user)
      this.route.params
        .subscribe((params) => {
          this.Id = params['id'];
          console.log(params['id'])
          this._retrieveSession.retrieveThisSession(this.Id)
            .subscribe(
              (sessions) => {
                this.successCb2(sessions);
                this.joinCondition = this.find(this.user.sessionsPending, this.sessions._id)
              })       
      })
    })

  }

  
  find(arr, id) {
    for (let i=0; i < arr.length; i++) {
      if (id == arr[i]) {
        return true
      } else {
        continue;
      }
    } return false
  }

  errorCb(err) {
    this.error = err;
    this.user = null;
    console.log(this.subjectss)
  }
  
  successCb(user) {
    this.user = user;
    console.log("the user in session-info is ",user)
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

  joinSession(sessionId){
    this._retrieveSession.joinTheSession(sessionId).subscribe(
      (session) => {console.log(session)
      this.router.navigate(['sessions'])
      });
  }
}
