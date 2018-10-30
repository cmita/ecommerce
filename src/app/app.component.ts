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

// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // @ViewChild('inputTemplateRef')
  // inputRef;

  constructor() {

  }


  ngOnInit() {

  }


}
