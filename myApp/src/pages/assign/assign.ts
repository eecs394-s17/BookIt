import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {TaskService} from '../../providers/task-service';

import { ChoresPage } from '../chores/chores';

@Component({
  selector: 'page-assign',
  templateUrl: 'assign.html',
  providers: [TaskService]
})
export class AssignPage {

  newTask = {};

  constructor(public navCtrl: NavController, private taskService: TaskService) {

  }

  addTask() {
    if (this.newTask['newName'] == '') {
      return
    }

    var newName = this.newTask['newName'];
    var assignTo = this.newTask["assignTo"];
    if(assignTo != null) {
      newName = newName + ", assigned to "+assignTo[0];
      if(assignTo.length > 1) {
        for(var i = 1;i<assignTo.length;i++) {
          newName = newName + ", "+assignTo[i];
        }
      }
    }


    var data = {
      "name": newName
    }
    this.taskService.addChore(data).subscribe(

      data => {
            this.navCtrl.pop();
          },
          // If trying to grab the data results in an error
          err => {
              console.log(err);
          },
          // Finally, In all cases console log "Task Grab Complete"
          () => console.log('Add Chore complete')

    );

    console.log(this.newTask['newName'])
    this.newTask['newName'] = '';
  }

}
