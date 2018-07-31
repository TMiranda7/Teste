import { IntroPage } from './../intro/intro';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user="";
  pass="";
  constructor(public navCtrl: NavController,
     public navParams: NavParams ,
     public toastCtrl : ToastController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  entrar(){
    let toast = this.toastCtrl.create({
      duration:3000,
      position:'bottom'  
    })

    this.navCtrl.push(IntroPage,{
      user : this.user
    })
    toast.setMessage("Bem vindo !")
    toast.present()
  }
  

}
