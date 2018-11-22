import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

import { JwtResponse } from '../login-page/auth/jwt-response';
import { AuthLoginInfo } from '../login-page/auth/login-info';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class LoginService {

  private loginUrl = 'http://localhost:8080/invoice/api/security/signin';

  isLoggedIn = false;

  private loginSource = new BehaviorSubject<boolean>(this.isLoggedIn);

  logIn = this.loginSource.asObservable();

  constructor(private http: HttpClient) {}

  attemptAuth(credentials: AuthLoginInfo): Observable<string> {
    // tslint:disable-next-line:max-line-length
    return this.http.post<string>(this.loginUrl + '?clockNumber=' + credentials.username + '&password=' + credentials.password, credentials, httpOptions);

  }

  changeLogin(login: boolean) {
    this.loginSource.next(login);
  }

}
