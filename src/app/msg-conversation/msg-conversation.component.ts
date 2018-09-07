import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { MessagingService } from '../services/messaging.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-msg-conversation',
  templateUrl: './msg-conversation.component.html',
  styleUrls: ['./msg-conversation.component.css'],
  providers: [SessionService, MessagingService]
})
export class MsgConversationComponent implements OnInit {

  user: any;
  error: string;
  privateData: any = '';
  mainMsg: any;
  Id: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private session: SessionService,
    private _messages: MessagingService,
  ) { }

  ngOnInit() {
    this.session.isLoggedIn()
    .subscribe(
      (user) => {
        this.successCb(user);
        //then after user is placed...
        this.route.params
        .subscribe((params) => {
          this.Id = params['id'];
      });
        this._messages.seeMsg(this.Id)
        .subscribe(
          (mainMsg) => this.successCb2(mainMsg)
        ); 
      
      }

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

  successCb2(msgs) {
    this.mainMsg = msgs;
    this.error = null;
    console.log(this.mainMsg)
  }
}
