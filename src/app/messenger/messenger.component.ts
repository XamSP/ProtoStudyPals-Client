import { Component, OnInit, Input } from '@angular/core';
import { SessionService } from '../services/session.service';
import { MessagingService } from '../services/messaging.service';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css'],
  providers: [SessionService, MessagingService]
})
export class MessengerComponent implements OnInit {
  user: any;
  error: string;
  privateData: any = '';
  msgs: any;
  msgForm: boolean;

  constructor(
    private session: SessionService,
    private _messages: MessagingService,
    ) { }

  ngOnInit() {
    this.session.isLoggedIn()
    .subscribe(
      (user) => this.successCb(user)
    );  

    this._messages.getMyMsgs()
    .subscribe(
      (msgs) => this.successCb2(msgs)
    ); 
  
    this.msgForm = false;
  }

  msgFormDisplay(){
    if (this.msgForm === true) {
      return this.msgForm = false;
    } else {
      return this.msgForm = true;
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

  successCb2(msgs) {
    this.msgs = msgs;
    this.error = null;
  }
}
