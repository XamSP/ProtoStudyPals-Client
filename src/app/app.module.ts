import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { routes } from './app.routing';
import { HttpModule } from '@angular/http';
import { FileUploadModule } from "ng2-file-upload";
import { FormsModule } from "@angular/forms";

//import { FileSelectDirective } from "ng2-file-upload";
import { ProfileComponent } from './profile/profile.component';
import { SessionService } from './services/session.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component'
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SessionsComponent } from './sessions/sessions.component';
import { MessengerComponent } from './messenger/messenger.component';
import { SessionFormComponent } from './session-form/session-form.component';
import { SessionBoardComponent } from './session-board/session-board.component';

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
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,
    FileUploadModule
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
