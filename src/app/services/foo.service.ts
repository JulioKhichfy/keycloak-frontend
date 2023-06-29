import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Foo } from '../model/foo';


const fooURL = "http://localhost:8080/foo/";

@Injectable({
  providedIn: 'root'
})
export class FooService {

  
  httpOptions = {headers: new HttpHeaders({'content-type' : 'application/json'})};

  constructor(private httpClient: HttpClient) { }

  public list():Observable<Foo[]>{
    return this.httpClient.get<Foo[]>(fooURL + 'list', this.httpOptions);
  }

  public detail(id: number): Observable<Foo>{
    return this.httpClient.get<Foo>(fooURL + `detail/${id}`, this.httpOptions);
  }

  public create(foo: Foo): Observable<any>{
    return this.httpClient.post<Foo>(fooURL + 'create', foo, this.httpOptions);
  }

  public update(id: number, foo: Foo): Observable<any>{
    return this.httpClient.put<Foo>(fooURL + `update/${id}`, foo, this.httpOptions);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<Foo>(fooURL + `delete/${id}`, this.httpOptions);
  }

}
