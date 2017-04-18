import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {TaskService} from '../../providers/task-service';

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

  constructor(public navCtrl: NavController, private taskService: TaskService) {
      // Subscribe is called once the grabTasks() function receives its data
    
  };

  ionViewDidEnter() {
    this.taskService.grabTasks().subscribe(
          // If data is received successfully
          data => {
              this.items = [];
              console.log("data",data);

              for(var i=0;i<data.length;i++) {
                this.items.push(data[i].name);
              }
          },
          // If trying to grab the data results in an error
          err => {
              console.log(err);
          },
          // Finally, In all cases console log "Task Grab Complete"
          () => console.log('Task Grab complete')
      );
  }

  addTask() {
    if (this.newTask['newName'] == '') {
      return
    }
    var data = {
      "name": this.newTask['newName']
    }
    this.taskService.addChore(data).subscribe(

      data => {
            this.items = [];
            for(var i=0;i<data.length;i++) {
              this.items.push(data[i].name);
            }
          },
          // If trying to grab the data results in an error
          err => {
              console.log(err);
          },
          // Finally, In all cases console log "Task Grab Complete"
          () => console.log('Add Chore complete')

    );
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
