import {SocialNetwork} from './social-network';
import * as _ from 'lodash';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/Observable/timer';
import 'rxjs/add/Observable/interval';
Observable.interval(1000).subscribe(x => console.log(x));

class App implements SocialNetwork{
	title = "Eggheads";
	getUsers(){
		return [{name:"John"}];
	}
}
console.log(_.isArray(new App().getUsers()))

