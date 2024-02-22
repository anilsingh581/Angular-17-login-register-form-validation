import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  data: any[] = [];
  constructor(private httpClient: HttpClient) { }

  public getData(): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1');
  }

  public login(inputs: any): Observable<any> {
    return inputs;
    //this is dummy result. You need to call login API to authenticate and get redirect URL if all OK for this login detail.
  }

}
