import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {map, catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  angURL: string = environment.ANG_URL;
  apiURL: string = environment.MAIN_URL;

  constructor(private http: Http) { }

  
  handleError(e) {
    return throwError(e.json().message);
  }

  getMyMsgs() {
    return this.http.get(`${this.apiURL}/messenger-api`, {withCredentials : true}).pipe(map(res => res.json()),catchError(this.handleError));
  }
  
  getPals() {
    return this.http.get(`${this.apiURL}/messenger-api/create`, {withCredentials : true}).pipe(map(res => res.json()),catchError(this.handleError));
  }

  sendMainMsg(obj){
    return this.http.post(`${this.apiURL}/messenger-api/create`, obj, {withCredentials : true}).pipe(map(res => res.json()),catchError(this.handleError));
  }

  seeMsg(id) {
    return this.http.get(`${this.apiURL}/messenger-api/${id}`, {withCredentials : true}).pipe(map(res => res.json()),catchError(this.handleError));
  }

  postMsg(id, obj){
    return this.http.post(`${this.apiURL}/messenger-api/${id}`, obj, {withCredentials : true}).pipe(map(res => res.json()),catchError(this.handleError));
  }
}
