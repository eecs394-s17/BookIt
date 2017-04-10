import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-shopping',
  templateUrl: 'shopping.html'
})

export class ShoppingPage {

  items: any[];
  newTask = {};

  constructor(public navCtrl: NavController) {
  	this.items = [
        "Toilet Paper",
        "Swiffer",
        "Eggs"
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
