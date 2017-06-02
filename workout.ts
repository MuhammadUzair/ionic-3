working code 


import { Component , OnInit } from '@angular/core';
import { IonicPage ,NavController  } from 'ionic-angular';
import { WorkOutService } from '../../Services/workOuts';

@Component({
  selector: 'page-work-outs',
  templateUrl: 'work.html',
  providers:[WorkOutService]
})
export class WorkOuts {

  workouts;

 static get parameters(){
        return [WorkOutService];
    }
    constructor(public _WorkOutService:WorkOutService){

        // this._WorkOutService = WorkOutService;

    
        

    }

    selectedWorkout(workout){
      console.log(workout);
      
    }


    ngOnInit(){
      
      this._WorkOutService.getWorkouts().subscribe(workouts => {
        this.workouts = workouts;
      })
      
    }

}