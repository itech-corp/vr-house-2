import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Slides} from 'ionic-angular';
import {HomePage} from "../home/home";
import {ContactPage} from "../contact/contact";

/**
 * Generated class for the SearchResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-search-result',
  templateUrl: 'search-result.html',
})
export class SearchResultPage {
  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides ;

  pet: string = "kittens";


  constructor() {

  }
}
