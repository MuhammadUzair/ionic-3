import { Component , OnInit } from '@angular/core';
import { IonicPage ,NavController  } from 'ionic-angular';
import { WorkOutService } from '../../Services/workOuts';

@Component({
  selector: 'page-work-outs',
  templateUrl: 'work.html',
  providers:[WorkOutService]
})
export class WorkOutsDetails {

   constructor(public navCtrl: NavController) {

  }

}
