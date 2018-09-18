import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import * as firebase from "firebase";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {



    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      statusBar.styleDefault();
      splashScreen.hide();
      let  config = {
        apiKey: "AIzaSyAuzyeWavd2-x3TJZDPm3EQb16b9dnF-Vc",
        authDomain: "vr-house-7f885.firebaseapp.com",
        databaseURL: "https://vr-house-7f885.firebaseio.com",
        projectId: "vr-house-7f885",
        storageBucket: "vr-house-7f885.appspot.com",
        messagingSenderId: "389921226573"
      };
      firebase.initializeApp(config);


    });
  }
}
