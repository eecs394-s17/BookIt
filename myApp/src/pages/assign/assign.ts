import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-assign',
  templateUrl: 'assign.html'
})
export class AssignPage {

  newTask = {};

  constructor(public navCtrl: NavController) {

  }

  addTask() {
    //alert('Hello')
    if (this.newTask['newName'] == '') {
      return
    }
    console.log(this.newTask['newName'])
    this.newTask['newName'] = '';
  }

}
