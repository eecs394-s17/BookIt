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
        var url = 'http://104.236.94.74:8000/chores';
        var response = this.http.get(url).map(res => res.json());
        return response;
    }

  addChore(data) {
    var url = 'http://104.236.94.74:8000/chores';
    var response = this.http.post(url, data).map(res => res.json());
    return response;
  }

  //data is the id of the chore
  deleteChore(data) {
    var url = 'http://104.236.94.74:8000/chores' + data['_id'];
    var response = this.http.delete(url, data).map(res => res.json());
    return response;
  }


}
