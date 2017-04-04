import { Component } from '@angular/core';

import { AddChorePage } from '../add_chore/add_chore';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  items: any[];

  constructor(public navCtrl: NavController) {
  	this.items = ["Take Out Kitchen Trash","Swiffer Living Room","Clean Kitchen"];

  };

  test()
  {
  	this.navCtrl.push(AddChorePage);
  }

}
