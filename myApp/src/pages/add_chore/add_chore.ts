import { Component } from '@angular/core';

import { AboutPage } from '../about/about';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-add-chore',
  templateUrl: 'add_chore.html'
})
export class AddChorePage {

  constructor(public navCtrl: NavController) {
    console.log("about",AboutPage);
  }


}

