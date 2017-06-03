import { Component , OnInit } from '@angular/core';
import { IonicPage ,NavController  } from 'ionic-angular';
import { WorkOutService } from '../../Services/workOuts';

@Component({
  selector: 'page-work-outs',
  templateUrl: 'work.html',
  providers:[WorkOutService]
})
export class WorkOutsDetails {

  workouts;

   constructor(public navCtrl: NavController,private _WorkOutService:WorkOutService) {

  }
  ngOnInit(){
      
      this._WorkOutService.getWorkouts().subscribe(workouts => {
        this.workouts = workouts;
      })
  }

}
