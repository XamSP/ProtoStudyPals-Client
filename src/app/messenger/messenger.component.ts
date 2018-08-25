import { Component, OnInit, Input } from '@angular/core';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css'],
  providers: [SessionService]
})
export class MessengerComponent implements OnInit {
  @Input() user: any;
  error: string;
  privateData: any = '';

  constructor(private session: SessionService) { }

  ngOnInit() {
    // this.session.isLoggedIn()
    // .subscribe(
    //   (user) => this.successCb(user)
    // );  
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
