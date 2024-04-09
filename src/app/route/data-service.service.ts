import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private _http: HttpClient) { }

  public data(){
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    return this._http.get(url);
  }
}
