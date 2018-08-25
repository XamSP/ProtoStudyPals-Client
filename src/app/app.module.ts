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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    AuthComponent,
    SignupComponent,
    SessionsComponent,
    
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
