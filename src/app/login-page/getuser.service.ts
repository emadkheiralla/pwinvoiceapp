import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { TokenStorageService } from './auth/token-storage.service';


@Injectable()
export class GetuserService {

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + this.tokenStorage.getToken()
    })
  };

  private getuserUrl = 'http://localhost:8080/invoice/api/user/session/information';

  userdata = {};

  private userDataSource = new BehaviorSubject<any>(this.userdata);

  userData = this.userDataSource.asObservable();

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  getUserData(): Observable<any> {
    return this.http.get<any>(this.getuserUrl, this.httpOptions)
      .map(res => {
        this.userDataSource.next(res);
      });
  }

}
