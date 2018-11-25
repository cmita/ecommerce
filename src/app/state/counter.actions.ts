// counter.actions.ts
import { Action } from '@ngrx/store';
import { UserInfo } from './counter.reducer';

export enum ActionTypes {
  Increment = '[Counter Component] Increment',
  Decrement = '[Counter Component] Decrement',
  Reset = '[Counter Component] Reset',
  LoadUserInfo = '[ Counter UserInfo] Load User Info',
  LoadUserInfoSuccess = '[ Counter UserInfo] Load User Info Success',
  LoadUserInfoFailure = '[ Counter UserInfo] Load User Info Failure'
}

export class Increment implements Action {
  readonly type = ActionTypes.Increment;
}

export class Decrement implements Action {
  readonly type = ActionTypes.Decrement;
}

export class Reset implements Action {
  readonly type = ActionTypes.Reset;
}

export class LoadUserInfoAction implements Action {
  readonly type = ActionTypes.LoadUserInfo;
}


export class LoadUserInfoSuccessAction implements Action {
  readonly type = ActionTypes.LoadUserInfoSuccess;

  constructor(public payload: { userinfo: UserInfo }) {
  }
}

export class LoadUserInfoFailureAction implements Action {
  readonly type = ActionTypes.LoadUserInfoFailure;
}


export type CounterActions =
  Increment |
  Decrement |
  Reset |
  LoadUserInfoAction |
  LoadUserInfoSuccessAction |
  LoadUserInfoFailureAction;
