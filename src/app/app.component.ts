import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from './services/user.service';
import {
  Observable,
  Observer,
  of,
  fromEvent,
  from,
  concat,
  Subject,
  throwError

} from 'rxjs';
import {
  map,
  delay,
  debounceTime,
  distinctUntilChanged,
  retry,
  retryWhen,
  scan,
  takeWhile,
  catchError,
  finalize
} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import { AppState } from './state/counter.reducer';
import { Increment, Decrement } from './state/counter.actions';

// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // @ViewChild('inputTemplateRef')
  // inputRef;

  count$: Observable<AppState>;
  count: any;

  constructor(private store: Store<AppState>) {
  }


  ngOnInit() {
    this.count$ = this.store.pipe(select('count'));

    this.count$.subscribe(
      (data) => {
        console.log(data);
        this.count = data['counter'];
      });
  }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

}
