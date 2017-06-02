import { Injectable ,Inject} from '@angular/core'
import { Http , Headers ,RequestOptions} from '@angular/http'
import { Observable} from 'rxjx/Observable'
import 'rxjs/Rx';

@Injectable()
export class WorkOutService{

    apiKey;
    workOutURL;

    static get parameters(){
        return [Http];
    }
    constructor(private _http:Http){

        // this._http = _http;
        this.apiKey='Zv8ZogLcYJKq5t_lxzHbphBNv8oOd3Zj';
        // this.workOutURL='https://api.mlab.com/api/1/databases?apiKey=X5Aw3ugxqYg6fLEvn7vHuxJKovmNvHTR';
        this.workOutURL='https://api.mlab.com/api/1/databases/ionic-crud/collections/work-outs/?apiKey=X5Aw3ugxqYg6fLEvn7vHuxJKovmNvHTR';
        console.log('Services Connected');
        

    }

    getWorkouts(){
       /* this._http.get(this.workOutURL)
        .map(res => { res.json()
            console.log(res);
            
        });

        */

        return this._http.get(this.workOutURL).map((data) => {
            data.json();
            console.log("I CAN SEE DATA HERE: ", data.json());
            return data.json();
        })
    }

    addWorkout(workout){
       var header =new Headers;
        header.append('Content-Type','application/json');
        return this._http.post(this.workOutURL,JSON.stringify(workout),
        {headers:header}).map(res => {
            res.json;
            console.log(res)
        })
/*
          return this._http.post(this.workOutURL, JSON.stringify(workout))
            .map(data => {
                data.json();
                console.log("I CAN SEE DATA HERE: ", data.json());
                return data.json();

            });
*/
    }
}