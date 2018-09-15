import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {map, catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RetrieveSessionService {
  angURL: string = environment.ANG_URL;
  apiURL: string = environment.MAIN_URL;

  constructor(private http: Http) { }

  handleError(e) {
    return throwError(e.json().message);
  }

  retrieveSession() {
    return this.http.get(`${this.apiURL}/session-api/`, {withCredentials : true}).pipe(map(res => res.json()),catchError(this.handleError));
  }

  retrieveThisSession(id) {
    return this.http.get(`${this.apiURL}/session-api/${id}`, {withCredentials : true}).pipe(map(res => res.json()),catchError(this.handleError));
  }

  retrieveMySession() {
    return this.http.get(`${this.apiURL}/session-api/my-sessions`, {withCredentials : true}).pipe(map(res => res.json()),catchError(this.handleError));
  }

  retrieveUser(id) {
    return this.http.get(`${this.apiURL}/users-api/${id}`, {withCredentials : true}).pipe(map(res => res.json()),catchError(this.handleError));
  }

  retrieveSubjects() {
    //console.log(this.http.get(`${this.apiURL}/subtags/subject`).pipe(map(res => res.json()),catchError(this.handleError)));
  
    return this.http.get(`${this.apiURL}/subtags-api/subject`, {withCredentials : true}).pipe(map(res => res.json()),catchError(this.handleError));
  }

  retrieveSubjectId(id) {
    return this.http.get(`${this.apiURL}/subtags-api/subject/${id}`, {withCredentials : true}).pipe(map(res => res.json()),catchError(this.handleError));
  }

  retrieveTags(){
    return this.http.get(`${this.apiURL}/subtags-api/tag`, {withCredentials : true}).pipe(map(res => res.json()),catchError(this.handleError));
  }

  createSession(session, user) {
    console.log(session);
    return this.http.post(`${this.apiURL}/session-api/create`, {session, user}, {withCredentials : true}).pipe(map(res => res.json()),catchError(this.handleError));
  }

  joinTheSession(sessionId) {
    console.log("its coming here")
    return this.http.post(`${this.apiURL}/session-api/join`, {sessionId}, {withCredentials : true}).pipe(map(res => res.json()),catchError(this.handleError));
  }
}
