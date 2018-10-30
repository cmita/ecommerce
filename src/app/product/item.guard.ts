import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemGuard implements CanActivate {
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let val = true;
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {(response.json())
      .then(json => {
        if (json) {
          console.log('json', json);
          val = true;
        } else {
          val = false;
        }
      });
    console.log('val', val);

    return val;
  });
  return val;
  }

}
