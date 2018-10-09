import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable()
export class SomeResolveService implements Resolve<any> {
  resolve() {
    return 100000;
  }
}
