
import { Component , OnInit } from '@angular/core';
import { IonicPage ,NavController  } from 'ionic-angular';
import { WorkOutService } from '../../Services/workOuts';

@Component({
  selector: 'page-work-outs',
  templateUrl: 'work.html',
  // providers:[WorkOutService]
})
export class AddWorkOuts {

  workouts;

 static get parameters(){
        return [WorkOutService];
    }
    constructor(public _WorkOutService:WorkOutService){

        // this._WorkOutService = WorkOutService;

    
        

    }

     onSubmit(tittle,note,type){

        let workout:any={};
      workout.tittle =tittle;
    workout.note =note;
    workout.type =type;

    this._WorkOutService.addWorkout(workout).subscribe(data => {
    console.log(data);
  },
  error =>  {console.log(error)});
    

    


     }



    ngOnInit(){
   /*   
      this._WorkOutService.getWorkouts().subscribe(workouts => {
        this.workouts = workouts;
      })
      
  */
  /*
   let workout:any={};
      workout.tittle ='tittle2';
    workout.note ='note2';
    workout.type ='type2';

    this._WorkOutService.addWorkout(workout).subscribe(data => {
    console.log(data);
  },
  error =>  {console.log(error)});
    
*/
    }
    

}
