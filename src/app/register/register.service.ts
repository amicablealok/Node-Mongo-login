import { Injectable } from '@angular/core';
// @ts-ignore
import {Http, Headers} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  datas : any
  constructor (
  private http: HttpClient) { }





  registerUser(userData) {
    this.http.post('http://localhost:4001/v1/register',{userData} ).subscribe({
      next: data => this.datas = data,
      error: error => console.error('There was an error!', error)
    })
  }


  //   registerUser( userData: userData): Observable<userData> {
  //     return this.http.put<userData>('http://localhost:4001/register', userData, httpOptions)
  //         .pipe(
  //             error(this.handleError('userData', userData))
  //         );
  // }
  //
  //   return this.http.post(`http://localhost:4001/register`,userData );

  }

