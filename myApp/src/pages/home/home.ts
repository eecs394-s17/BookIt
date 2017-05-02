declare var loggedIn: number;
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import {TaskService} from '../../providers/task-service';

import { LoginPage } from '../login/login';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

  providers: [TaskService]
})

export class HomePage {
  items = [];

  @ViewChild('barCanvas') barCanvas;

  barChart: any;

  constructor(public navCtrl: NavController, private taskService: TaskService) {

  };

  ionViewNumTasks() {
    var lilyCount = 0;
    var sehmonCount = 0;
    var spenserCount = 0;
    var johnCount = 0;
    var tasksData = [lilyCount, sehmonCount, spenserCount, johnCount];

      this.taskService.grabTasks().subscribe(
        data => {
          this.items = [];
          this.items = data;
          console.log(data);
          for (var i=0; i < data.length; i++) {

          }
        }
      );
      err => {
          console.log(err);
      }
      () => console.log("Task Grab Complete")
  };



  ionViewDidLoad() {

        this.barChart = new Chart(this.barCanvas.nativeElement, {

            type: 'bar',
            data: {
                labels: ["Sehmon", "Spenser", "John", "Lily"],
                datasets: [{
                    label: 'Total',
                    data: [6, 2, 4, 8],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }

        })
      }
}
