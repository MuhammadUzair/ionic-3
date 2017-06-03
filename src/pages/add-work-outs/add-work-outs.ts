
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { WorkOutService } from '../../Services/workOuts';

@Component({
  selector: 'page-work-outs',
  templateUrl: 'work.html',
})
export class AddWorkOuts {

  workouts;

  static get parameters() {
    return [WorkOutService];
  }
  constructor(public _WorkOutService: WorkOutService) {

  }

  onSubmit(tittle, note, type) {

    let workout: any = {};
    workout.tittle = tittle;
    workout.note = note;
    workout.type = type;

    this._WorkOutService.addWorkout(workout).subscribe(data => {
      console.log(data);
    },
      error => { console.log(error) });





  }



  ngOnInit() {

  }


}
