import { Component, OnInit, Input } from '@angular/core';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [SessionService]
})
export class ProfileComponent implements OnInit {
  user: any;
  error: string;
  privateData: any = '';
  showEdit: boolean;
  
  constructor(private session: SessionService) { }

  ngOnInit() {
    this.session.isLoggedIn()
    .subscribe(
      (user) => this.successCb(user)
    );
    this.showEdit = false;
  }

  //
  
  showIt(){
    if (this.showEdit === true) {
      return this.showEdit = false;
    } else {
      return this.showEdit = true;
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
