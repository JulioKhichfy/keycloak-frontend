import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL = 'http://localhost:8080/user/'

  httpOptions = {headers: new HttpHeaders({'content-type' : 'application/json'})};

  constructor(private httpClient: HttpClient) { }

  public create(user:User): Observable<any> {
    return this.httpClient.post<User>(this.userURL + 'create', user, this.httpOptions);
  }
}
