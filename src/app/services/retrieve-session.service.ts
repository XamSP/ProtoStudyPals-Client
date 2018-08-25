import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {map, catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RetrieveSessionService {
  angURL: string = "http://localhost:4200";
  apiURL:string = "http://localhost:3000";

  constructor(private http: Http) { }

  handleError(e) {
    return throwError(e.json().message);
  }

  retrieveSession() {
    return this.http.get(`${this.apiURL}/signup`).pipe(map(res => res.json()),catchError(this.handleError));
  }

}
