import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  hours = 1; 
  no_patients = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }


  plus(){
    console.log(this.no_patients , 'sssssssss');
    
    this.no_patients++;
  }

  minus(){
    if (this.no_patients == 0) {
      this.no_patients  = 0
    }
    else{
      this.no_patients--;
    }
  }
}
