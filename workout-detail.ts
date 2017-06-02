detail

import { Component , OnInit } from '@angular/core';
import { IonicPage ,NavController ,NavParams  } from 'ionic-angular';
import { WorkOutService } from '../../Services/workOuts';

@Component({
  selector: 'page-work-outs',
  templateUrl: 'work.html',
  providers:[WorkOutService]
})
export class WorkOutsDetails {

  workout;

  static get parameters(){
        return [[NavController],[NavParams]];
    }

   constructor(
     public nav: NavController,
     public navParams: NavParams,
   ) {

     this.workout = this.navParams.get(this.workout)

  }

}
