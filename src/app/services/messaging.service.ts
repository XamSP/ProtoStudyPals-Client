import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {map, catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  angURL: string = "http://localhost:4200";
  apiURL: string = "http://localhost:3000";

  constructor(private http: Http) { }

  
  handleError(e) {
    return throwError(e.json().message);
  }

  getMyMsgs(id) {
    return this.http.get(`${this.apiURL}/messenger/`, id).pipe(map(res => res.json()),catchError(this.handleError));
  }
  
  getPals() {
    return this.http.get(`${this.apiURL}/messenger/create`).pipe(map(res => res.json()),catchError(this.handleError));
  }

  sendMainMsg(obj){
    return this.http.post(`${this.apiURL}/messenger/create`, obj).pipe(map(res => res.json()),catchError(this.handleError));
  }

  seeMsg(id) {
    return this.http.get(`${this.apiURL}/messenger/${id}`).pipe(map(res => res.json()),catchError(this.handleError));
  }

  postMsg(id, obj){
    return this.http.post(`${this.apiURL}/messenger/${id}`, obj).pipe(map(res => res.json()),catchError(this.handleError));
  }
}
