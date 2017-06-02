import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController,IonicPage } from 'ionic-angular';
import { WorkOutService } from '../../Services/workOuts';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class addWorkOut {
   static get parameters(){
        return [WorkOutService];
    }

  form:FormGroup;
  workout:any={};
  

  constructor(public navCtrl: NavController,
    private fb: FormBuilder,
   private _service:WorkOutService) {
     /*  this.form = this.fb.group({
      'tittle': [this.workout.tittle || null, Validators.required],
      'note': [this.workout.note || null, Validators.required],
      'type': [this.workout.type || null, Validators.required],
   })
   */
  let workout:any={};
      workout.tittle ='tittle2';
    workout.note ='note2';
    workout.type ='type2';

    this._service.addWorkout(workout).subscribe(data => {
    console.log(data);
  },
  error =>  {console.log(error)});

  }
  onSubmit(tittle,note,type){
    this.workout.tittle =tittle;
    this.workout.note =note;
    this.workout.type =type;
    console.log(this.workout);
    let workout=this.workout

  /*  this._WorkOutService.addWorkout(workout).subscribe(data => {
    console.log(data);
  },
  error =>  {console.log(error)});
    
*/
}

}
