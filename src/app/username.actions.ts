import { Action } from '@ngrx/store';

export enum UsernameActionTypes {
  LoadUsernames = '[Username] Load Usernames'
}

export class LoadUsernames implements Action {
  readonly type = UsernameActionTypes.LoadUsernames;
}

export type UsernameActions = LoadUsernames;
