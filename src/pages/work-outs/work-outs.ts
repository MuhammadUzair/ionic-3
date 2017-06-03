
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { WorkOutService } from '../../Services/workOuts';

@Component({
  selector: 'page-work-outs',
  templateUrl: 'work.html',
})
export class WorkOuts {

  workouts;

  static get parameters() {
    return [WorkOutService];
  }
  constructor(public _WorkOutService: WorkOutService) {

  }

  selectedWorkout(workout) {
    // console.log(workout);

  }

  delete(id) {
    console.log(id)
    this._WorkOutService.deleteWorkout(id).subscribe(workouts => {
      console.log(workouts);

    })
  }
  update(id) {
    let workout: any = {};
    workout.tittle = 'tittle2';
    workout.note = 'note2';
    workout.type = 'type2';
    console.log(id);
    console.log(workout);

    this._WorkOutService.updateWorkout(id, workout);
  }


  ngOnInit() {

    this._WorkOutService.getWorkouts().subscribe(workouts => {
      this.workouts = workouts;
    })

  }


}
