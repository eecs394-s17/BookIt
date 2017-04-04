import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-chore',
  templateUrl: 'chores.html'
})

export class ChoresPage {

  items: any[];
  newTask = {};

  constructor(public navCtrl: NavController) {
  	this.items = [
        "Take Out Kitchen Trash",
        "Swiffer Living Room",
        "Clean Kitchen"
    ];
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
