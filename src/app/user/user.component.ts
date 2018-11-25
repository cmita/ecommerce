import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, UserInfo } from '../state/counter.reducer';
import { Observable } from 'rxjs';
import { LoadUserInfoAction } from '../state/counter.actions';
import { userinfoSelector, userinfoStatusSelector } from '../state/counter.selectors';

@Component({
  selector: 'st-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username$: any;

  userinfoLoadStatus$: Observable<string>;
  userinfo$: Observable<UserInfo>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.username$ = this.store.pipe(select('count'));
    this.userinfo$ = this.store.pipe(select(userinfoSelector));
    this.userinfoLoadStatus$ = this.store.pipe(select(userinfoStatusSelector));
  }

  fetchGithubUserInfo(): void {
    this.store.dispatch(new LoadUserInfoAction());
  }
}
