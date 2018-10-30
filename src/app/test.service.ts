import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable()
export class TestService {
  public testSubject: ReplaySubject<string>;

  constructor() {
    this.testSubject = new ReplaySubject<string>();

  }
}
