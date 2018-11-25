import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MoviesState } from './movies.reducer';
import * as fromMovies from './movies.reducer';

export const selectMoviesState = createFeatureSelector<MoviesState>('movies');

export const selectAllMovies = createSelector(selectMoviesState, fromMovies.selectAll);
