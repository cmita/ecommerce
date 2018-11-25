import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { AppState } from './counter.reducer';

const selectCountState = createFeatureSelector<AppState>('count');

export const counterSelector = createSelector(selectCountState, state => state.counter);

export const usernameSelector = createSelector(selectCountState, state => state.userName);

export const userinfoSelector = createSelector(selectCountState, state => state.userinfo);

export const userinfoStatusSelector = createSelector(selectCountState, state => state.userinfoStatus);

export const locationSelector = createSelector(userinfoSelector, state => state.location);
