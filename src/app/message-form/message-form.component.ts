import { Component, OnInit } from '@angular/core';
import { SessionService } from "../services/session.service";
import { Router } from '@angular/router';
import { MessagingService } from '../services/messaging.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {

  formSession: any = {
    subject: '',
    username: '',
    childMsgContent: ''
  }

  user: any;
  error: string;
  privateData: any = '';
  msgs: any;

  constructor(
    private router: Router,
    private _session: SessionService,
    private _messenger: MessagingService,


  ) { }

  ngOnInit() {
  }

  sendMsg(form){
    this._messenger.sendMainMsg(form)
    .subscribe(
      (msgs) => this.successCb2(msgs),
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
  }

  errorCb2(err) {
    this.error = err;
    this.msgs = null;
  }
  
  successCb2(msgs) {
    this.msgs = msgs;
    this.msgs = null;
  }
}
