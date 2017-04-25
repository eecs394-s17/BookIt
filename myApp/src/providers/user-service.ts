import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {
  public data:Object = {};

  constructor(public http: Http) {
    console.log('Hello UserService Provider');
  }

  login(name) {
        var url = 'http://104.236.94.74:8000/users/'+name;
        var response = this.http.get(url).map(res => res.json());
        return response;

    }
}

