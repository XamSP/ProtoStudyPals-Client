import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {map, catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RetrieveSessionService {
  angURL: string = "http://localhost:4200";
  apiURL: string = "http://localhost:3000";

  constructor(private http: Http) { }

  handleError(e) {
    return throwError(e.json().message);
  }

  retrieveSession() {
    return this.http.get(`${this.apiURL}/session/`).pipe(map(res => res.json()),catchError(this.handleError));
  }

  retrieveSubjects() {
    //console.log(this.http.get(`${this.apiURL}/subtags/subject`).pipe(map(res => res.json()),catchError(this.handleError)));
  
    return this.http.get(`${this.apiURL}/subtags/subject`).pipe(map(res => res.json()),catchError(this.handleError));
  }

  retrieveSubjectId(id) {
    return this.http.get(`${this.apiURL}/subtags/subject/${id}`).pipe(map(res => res.json()),catchError(this.handleError));
  }

  retrieveTags(){
    return this.http.get(`${this.apiURL}/subtags/tag`).pipe(map(res => res.json()),catchError(this.handleError));
  }

  createSession(session, user) {
    console.log(session);
    return this.http.post(`${this.apiURL}/session/create`, {session, user}).pipe(map(res => res.json()),catchError(this.handleError));
  }
}
