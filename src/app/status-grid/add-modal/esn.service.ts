import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from '../../login-page/auth/token-storage.service';

@Injectable()
export class EsnService {
    options = [];

    private esnSource = new BehaviorSubject<string[]>(this.options);
    currentEsn = this.esnSource.asObservable();

    httpOptions = {
        headers: new HttpHeaders({
            Authorization: 'Bearer ' + this.tokenStorage.getToken()
        })
    };

    url: string;
    constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {
        this.url = 'http://localhost:8080/invoice/api/invoice/status/esn/M320229';
    }

    search_word() {
        return this.http.get(this.url, this.httpOptions).map(res => {
            for (const key of Object.keys(res)) {
                this.options.push(res[key].esn);
            }
        });
    }
}
