import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public usuario;
  constructor(
    public navCtrl: NavController, 
    public navParams :NavParams)
    {
     
    }
}

