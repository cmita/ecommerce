// counter.reducer.ts
import { Action } from '@ngrx/store';
import { ActionTypes } from './counter.actions';

export const initialState = {
  counter: 0,
  userName: 'Shreemita'
};

export interface AppState {
  counter: number;
  userName: string;
}


export function counterReducer(state: AppState = initialState, action: Action) {
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

    default:
      return state;
  }
}
