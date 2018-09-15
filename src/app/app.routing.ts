import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component';
import { SessionsComponent } from './sessions/sessions.component';
import { MessengerComponent } from './messenger/messenger.component';
import { MsgConversationComponent } from './msg-conversation/msg-conversation.component';
import { SessionInfoComponent } from './session-info/session-info.component';

export const routes: Routes = [
    { path: '', component: AuthComponent },
    { path: 'board', component: DashboardComponent },
    { path: 'sessions', component: SessionsComponent },
    { path: 'sessions/:id', component: SessionInfoComponent },
    { path: 'messenger', component: MessengerComponent },
    { path: 'messenger/:id', component: MsgConversationComponent },    
    { path: 'profile/:id', component: ProfileComponent },
    { path: '**', redirectTo: '' }
];