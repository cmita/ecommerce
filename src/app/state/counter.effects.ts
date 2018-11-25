import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { UserService } from '../services/user.service';
import { LoadUserInfoAction, ActionTypes, LoadUserInfoSuccessAction, LoadUserInfoFailureAction } from './counter.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { UserInfo } from './counter.reducer';
import { of } from 'rxjs';

@Injectable()
export class CounterEffects {

  @Effect()
  laodUserinfoEffect$ = this.actions$.pipe(
    ofType<LoadUserInfoAction>(ActionTypes.LoadUserInfo),
    mergeMap(action => this.userService.getGitHubUser()),
    map((userinfo: UserInfo) => {
      return new LoadUserInfoSuccessAction({userinfo});
    }),
    catchError(() => {
      return of(new LoadUserInfoFailureAction());
    })
  );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}
