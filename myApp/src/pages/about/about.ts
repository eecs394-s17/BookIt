import { Component } from '@angular/core';

import { AddChorePage } from '../add_chore/add_chore';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  items: any[];
  task = {};

  constructor(public navCtrl: NavController) {
  	this.items = ["Take Out Kitchen Trash","Swiffer Living Room","Clean Kitchen"];
  };

  addTask() {
    if (this.task['name'] == '') {
      return
    }
    this.items.push(this.task['name'])
    this.task['name'] = ''
  }

}
