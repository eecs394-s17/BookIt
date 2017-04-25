import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {
<<<<<<< HEAD
  public data:Object = {};

  constructor(public http: Http) {
    console.log('Hello UserService Provider');
  }

  login(name) {
        var url = 'http://localhost:8000/users/'+name;
        var response = this.http.get(url).map(res => res.json());
        return response;

    }
}
=======
  public name:String = "";
  public points: 0;
  public completed: {};
}
>>>>>>> 69f1c4f622d59ae731a1a79f37cec32939f02e65
