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
  }

  // Function to grab data from the api
  grabTasks() {
        var url = 'http://104.236.94.74:8000/chores';
        var response = this.http.get(url).map(res => res.json());
        return response;
    }

  addChore(data) {
    console.log(data);
    var url = 'http://104.236.94.74:8000/chores';
    // var url = 'http://localhost:8000/chores';
    var response = this.http.post(url, data).map(res => res.json());
    return response;
  }

  //data is the id of the chore
  deleteChore(data) {
    var url = 'http://104.236.94.74:8000/chores/' + data['_id'];
    var response = this.http.delete(url, data).map(res => res.json());
    return response;
  }

  // Takes in taskId and the current value of completed and performs a logical NOT in the database
  updateChore(data){
    // var url = 'http://104.236.94.74:8000/chores/' + data['_id'];
    var url = 'http://localhost:8000/chores/' + data['_id'];
    var response = this.http.put(url, data).map(res => res.json());
    return response;
  }


}
