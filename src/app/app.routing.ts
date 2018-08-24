import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    { path: '', component: AuthComponent },
    { path: 'board', component: DashboardComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '**', redirectTo: '' }
];