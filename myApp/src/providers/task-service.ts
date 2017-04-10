import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TaskService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TaskService {

  constructor(public http: Http) {
    console.log('Hello TaskService Provider');
  }

  // Function to grab data from the api
  // TODO: Replace url with valid API url
  grabTasks() {
        var url = 'https://randomuser.me/api/';
        var response = this.http.get(url).map(res => res.json());
        return response;
    }


}
