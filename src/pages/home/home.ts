import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Timbre1Page } from '../timbre1/timbre1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
goToTimbre1Page(){
  this.navCtrl.push(Timbre1Page)
}
}
