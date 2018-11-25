import { Action } from '@ngrx/store';
import { Movie } from '../model/movie.model';

export enum MoviesActionTypes {
  LoadMovies = '[Movies] Load Movies',
  LoadMoviesSuccess = '[Movies] Load Movies Success',
  LoadMoviesFailure = '[Movies] Load Movies Failure'
}

export class LoadMoviesAction implements Action {
  readonly type = MoviesActionTypes.LoadMovies;
}

export class LoadMoviesSuccessAction implements Action {
  readonly type = MoviesActionTypes.LoadMoviesSuccess;

  constructor(public payload: { movies: Movie[] }) {}
}

export class LoadMoviesFailureAction implements Action {
  readonly type = MoviesActionTypes.LoadMoviesFailure;
}

export type LoadMoviesActions =
  | LoadMoviesAction
  | LoadMoviesFailureAction
  | LoadMoviesSuccessAction;
