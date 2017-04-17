import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {TaskService} from '../../providers/task-service';

@Component({
  selector: 'page-chore',
  templateUrl: 'chores.html',
  // Providers are scripts that use http to call to an external API
  providers: [TaskService]
})

export class ChoresPage {

  items = [];
  newTask = {};

  constructor(public navCtrl: NavController, private taskService: TaskService) {
      // Subscribe is called once the grabTasks() function receives its data
      this.taskService.grabTasks().subscribe(
          // If data is received successfully
          data => {
              this.items.push(data[0].name);
          },
          // If trying to grab the data results in an error
          err => {
              console.log(err);
          },
          // Finally, In all cases console log "Task Grab Complete"
          () => console.log('Task Grab complete')
      );
  };

  addTask() {
    if (this.newTask['newName'] == '') {
      return
    }
    this.items.unshift(this.newTask['newName'])
    this.newTask['newName'] = '';
  }

  removeTask(item) {
      //Right now this searches array for matching strings
      //Change to populate UI with objects and find task by ID
      for(var i=0; i < this.items.length; i++){
          if (this.items[i] == item){
              this.items.splice(i, 1);
              return;
          }
      }
  }
}
