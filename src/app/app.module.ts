import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from "@angular/router";
import { routes } from './app.routing';
import { HttpModule } from '@angular/http';
// import { FileUploadModule } from "ng2-file-upload";
import { FormsModule } from "@angular/forms";

import { FileSelectDirective } from "ng2-file-upload";
import { ProfileComponent } from './profile/profile.component';
import { SessionService } from './services/session.service';
import { RetrieveSessionService } from './services/retrieve-session.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component'
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SessionsComponent } from './sessions/sessions.component';
import { MessengerComponent } from './messenger/messenger.component';
import { SessionFormComponent } from './session-form/session-form.component';
import { SessionBoardComponent } from './session-board/session-board.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { MsgConversationComponent } from './msg-conversation/msg-conversation.component';
import { SessionQueryBarComponent } from './session-query-bar/session-query-bar.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { LandPageComponent } from './land-page/land-page.component';
import { SessionInfoComponent } from './session-info/session-info.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    AuthComponent,
    SignupComponent,
    SessionsComponent,
    MessengerComponent,
    SessionFormComponent,
    SessionBoardComponent,
    MessageFormComponent,
    MsgConversationComponent,
    SessionQueryBarComponent,
    ProfileEditComponent,
    LandPageComponent,
    SessionInfoComponent,
    NavBarComponent,
    // FileSelectDirective,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,
    // FileUploadModule
  ],
  providers: [SessionService, RetrieveSessionService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
