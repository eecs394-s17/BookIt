import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {TaskService} from '../../providers/task-service';
import {UserService} from '../../providers/user-service';

import { AssignPage } from '../assign/assign';

@Component({
  selector: 'page-chore',
  templateUrl: 'chores.html',
  // Providers are scripts that use http to call to an external API
  providers: [TaskService]
})

export class ChoresPage {
  assignPage = AssignPage

  items = [];
  newTask = {};

  constructor(public navCtrl: NavController, private taskService: TaskService,public user:UserService) {
      // Subscribe is called once the grabTasks() function receives its data
      console.log("d2",this.user.data);

  };

  ionViewDidEnter() {
    this.taskService.grabTasks().subscribe(
          // If data is received successfully
          data => {
              this.items = [];
              this.items = data;
          },
          // If trying to grab the data results in an error
          err => {
              console.log(err);
          },
          // Finally, In all cases console log "Task Grab Complete"
          () => console.log('Task Grab complete')
      );
  }

  removeTask(item) {
      //Right now this searches array for matching strings
      //Change to populate UI with objects and find task by ID
      var options = {"_id": item};
      this.taskService.deleteChore(options).subscribe(

        data => {
              this.items = data;
            },
            // If trying to grab the data results in an error
            err => {
                console.log(err);
            },
            // Finally, In all cases console log "Task Grab Complete"
            () => console.log('Delete Chore complete')

      );
  }
}
