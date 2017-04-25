import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import {UserService} from '../../providers/user-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
	login = {};
	constructor(public navCtrl: NavController,public user:UserService) {
		user.name = "john";
	}

  signIn() {
    this.navCtrl.setRoot(HomePage);
  }
}
