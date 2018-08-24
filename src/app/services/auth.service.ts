import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = "http://35.190.191.33:9001/schoolsystem/api/v1/oauth/"

  constructor(
    private http: Http
  ) { }
  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('tererojas.i@gmail.com:3x4m3nfr0nt'));
  }

  loginService(auth): Observable<string> {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(this.baseUrl, auth, {headers: headers})
    .pipe(map((res: Response) => res.json()))
 }
}
