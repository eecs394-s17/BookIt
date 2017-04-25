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
		//user.name = "john";

	}

	submitLogin() {
		if(this.login["name"] == null) {
			this.login["name"] = "john";
		}

		//console.log(this.login);

		this.user.login(this.login["name"]).subscribe(

          data => {
          		this.user.data = data[0];
                console.log("data", this.user.data);
                this.navCtrl.pop();
              },
              // If trying to grab the data results in an error
              err => {
                  console.log(err);
              },
              // Finally, In all cases console log "Task Grab Complete"
              () => console.log('get user complete')

        );

	}

}
