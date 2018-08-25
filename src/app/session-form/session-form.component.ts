import { Component, OnInit, Input } from '@angular/core';
import { SessionService } from '../services/session.service';
import { RetrieveSessionService } from '../services/retrieve-session.service';

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

  constructor(private _retrieveSession: RetrieveSessionService) { }

  ngOnInit() {
  }

}
