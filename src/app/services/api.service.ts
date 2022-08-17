import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpHeaders,
    HttpErrorResponse,
    HttpResponse,
    HttpParams,
  } from '@angular/common/http';
  import { Observable, of } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class apiService{
    httpClient: any;
    constructor(
      private http: HttpClient,
    ) { }

    // public Signin(username:any, pasword:any){
    //   const httpOptions = {
    //     headers: new HttpHeaders({
    //       'Content-Type':  'application/json',
    //     })
    //   };
    //   return this.httpClient.post("http://192.34.59.79:8000/api/v1/login", httpOptions);
    // }

    signIn(data: any): Observable<any> {
      return this.http.post(
        'http://192.34.59.79:8000/api/v1/login',
        data,
        {
          headers: new HttpHeaders({
          }),
        }
      );
    }
    
  }