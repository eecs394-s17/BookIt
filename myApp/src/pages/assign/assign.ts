import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {TaskService} from '../../providers/task-service';

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

    var data = {
      "name": newName,
      "assignedTo": assignTo,
      "completed": false,
    }
    console.log(data);

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
  }

  completeTask(task){
    console.log(task);
  }

}
