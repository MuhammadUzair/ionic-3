import { Component } from '@angular/core';

import { addWorkOut } from '../add/addWorkOut';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { WorkOuts } from '../work-outs/work-outs';
import { WorkOutsDetails } from '../work-outs-details/work-outs-details';
import { AddWorkOuts } from '../add-work-outs/add-work-outs';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  // tab2Root = addWorkOut;
  tab2Root = AddWorkOuts;
  tab3Root = ContactPage;
  tab4Root = WorkOuts;
  tab5Root = WorkOutsDetails;

  constructor() {

  }
}
