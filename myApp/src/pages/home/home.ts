import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loggedIn = 0
  
  constructor(public navCtrl: NavController) {

  }

  ngAfterViewInit() {
    if(this.loggedIn == 0) {
        this.navCtrl.push(LoginPage);
    }
    this.loggedIn = 1
  }

}
