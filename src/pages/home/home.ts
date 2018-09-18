import { Component, OnInit } from '@angular/core';
import DataSnapshot = firebase.database.DataSnapshot;
import * as firebase from "firebase";
import {LoadingController, ToastController} from "ionic-angular";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  {

  constructor(private toastCtrl: ToastController,
              private loadingCtrl: LoadingController) {}


saveOnDb(){
    return new Promise( (resolve, reject) =>{
      firebase.database().ref('test').set({java:'moni',ranka:'levire',etat:true}).then(
        (data: DataSnapshot) => {
          resolve(data);
        }
      ).catch(
        (error) => {
          reject(error);
        }
      );
    });
}

onSaveList(){
    let loader = this.loadingCtrl.create({
        content: 'sauvegarde en cours '
    });
    loader.present();
    this.saveOnDb().then(
      () => {
        loader.dismiss();
        this.toastCtrl.create({
          message: 'Donnee sauvegarder',
          duration:3000,
          position:'bottom'
        }).present();
      }
    ).catch(
      (error) =>{
        loader.dismiss();
         this.toastCtrl.create({
        message:error,
        duration: 3000,
        position:'bottom'
      }).present();
      }
    );
}
}
