import { Component } from '@angular/core';

import { ChoresPage } from '../chores/chores';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ChoresPage;

  constructor() {

  }
}
