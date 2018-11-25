// counter.reducer.ts
import { Action } from '@ngrx/store';
import { ActionTypes, CounterActions } from './counter.actions';



export interface UserInfo {
  username: string;
  location: string;
  company: string;
  name: string;
}

export interface AppState {
  counter: number;
  userName: string;
  userinfo: UserInfo;
  userinfoStatus: string;
}

export const initialState = {
  counter: 0,
  userName: 'Shreemita',
  userinfo: undefined,
  userinfoStatus: 'not-loaded'
};

export function counterReducer(state: AppState = initialState, action: CounterActions) {
  switch (action.type) {
    case ActionTypes.Increment:
      return {
        ...state,
        counter: state.counter + 1
      };

    case ActionTypes.Decrement:
      return {
        ...state,
        counter: state.counter - 1
      };

    case ActionTypes.Reset:
      return {
        ...state,
        counter: 0
      };

    case ActionTypes.LoadUserInfo:
      return {
        ...state,
        userinfoStatus: 'loading'
      };

    case ActionTypes.LoadUserInfoSuccess:
      return {
        ...state,
        userinfoStatus: 'loaded',
        userinfo: action.payload.userinfo
      };

    case ActionTypes.LoadUserInfoFailure:
      return {
        ...state,
        userinfoStatus: 'failed',
        userinfo: undefined
      };


    default:
      return state;
  }
}
