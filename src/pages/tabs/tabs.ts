import { Component } from '@angular/core';


import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {SearchResultPage} from "../search-result/search-result";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SearchResultPage;
  tab3Root = ContactPage;


  constructor() {

  }
}
