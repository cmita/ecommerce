import { Component, OnInit } from '@angular/core';
import { Store , select } from '@ngrx/store';
import { AppState } from '../state/counter.reducer';


@Component({
  selector: 'st-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username$: any;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.username$ = this.store.pipe(select('count'));
  }

}
