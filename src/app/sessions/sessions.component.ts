import { Component, OnInit, Input } from '@angular/core';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css'],
  providers: [SessionService]
})
export class SessionsComponent implements OnInit {
  @Input() user: any;
  error: string;
  privateData: any = '';
  sessionForm: boolean;

  constructor(private session: SessionService) { }

  ngOnInit() {
    // this.session.isLoggedIn()
    // .subscribe(
    //  ok (user) => this.successCb(user)
    // );  
    this.sessionForm === false;
  }

  sessionFormDisplay(){
    if (this.sessionForm === true) {
      return this.sessionForm = false;
    } else {
      return this.sessionForm = true;
    }
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
