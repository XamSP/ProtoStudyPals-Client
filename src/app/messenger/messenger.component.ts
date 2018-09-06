import { Component, OnInit, Input } from '@angular/core';
import { SessionService } from '../services/session.service';
import { MessagingService } from '../services/messaging.service';
import { Router } from '@angular/router';

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
  objMsgs: any;
  msgForm: boolean;
  Id: "";

  constructor(
    private router: Router,
    private session: SessionService,
    private _messages: MessagingService,
    ) { }

    //need to ask alan on how to wait for the user to get the messages
  ngOnInit() {
    this.session.isLoggedIn()
    .subscribe(
      (user) => {
        this.successCb(user);
        //then after user is placed...
        console.log('THIS IS MESSENGER! 2 '+this.Id);
        this._messages.getMyMsgs()
        .subscribe(
          (objMsgs) => this.successCb2(objMsgs
          )
        ); 
      
      }

    );  
  
    this.msgForm = false;
  }

  viewProfile(id){
    this.router.navigate(['contact', id]);
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
    this.Id = user._id;
    console.log('THIS IS MESSENGER! '+this.Id);
    this.error = null;
  }

  successCb2(msgs) {
    this.objMsgs = msgs;
    this.error = null;
    console.log(this.objMsgs)
  }
}
