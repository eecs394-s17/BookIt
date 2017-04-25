import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  public name:String = "";
  public points: 0;
  public completed: {};
}
