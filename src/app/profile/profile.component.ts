import { Component, OnInit, Input } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RetrieveSessionService } from '../services/retrieve-session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [SessionService]
})
export class ProfileComponent implements OnInit {
  user: any;
  thisUser: any;
  error: string;
  privateData: any = '';
  showEdit: boolean;
  Id: any;
  
  constructor(
    private session: SessionService,
    private _retrieveSession: RetrieveSessionService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.session.isLoggedIn()
    .subscribe(
      (user) => this.successCb(user)
    );

    this.route.params
    .subscribe((params) => {
      this.Id = params['id'];
      console.log(params['id'])
      
      this._retrieveSession.retrieveUser(this.Id)
        .subscribe(
        (elUser) => this.successCb2(elUser)
        );
    })

    this.showEdit = false;
  }
  
  
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

  successCb2(elUser) {
    this.thisUser = elUser.user;
    console.log(this.thisUser)
    this.error = null;
  }
}
