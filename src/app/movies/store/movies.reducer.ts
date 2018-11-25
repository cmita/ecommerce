import { Movie } from '../model/movie.model';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { LoadMoviesActions, MoviesActionTypes } from './movies.actions';

export interface MoviesState extends EntityState<Movie> {
  moviesLoadStatus: string;
}

export const adapter: EntityAdapter<Movie> = createEntityAdapter<Movie>();

export const initialMoviesState: MoviesState = adapter.getInitialState({
  moviesLoadStatus: 'not-loaded'
});

export function moviesReducer(
  state: MoviesState = initialMoviesState,
  action: LoadMoviesActions
): MoviesState {
  switch (action.type) {
    case MoviesActionTypes.LoadMovies:
      return {
        ...state,
        moviesLoadStatus: 'loading'
      };

    case MoviesActionTypes.LoadMoviesSuccess:
      return adapter.addAll(action.payload.movies, {...state, moviesLoadStatus: 'loaded' });

    case MoviesActionTypes.LoadMoviesFailure:
      return {
        ...state,
        moviesLoadStatus: 'not-loaded'
      };

    default:
      return state;
  }
}

export const { selectAll, selectTotal } = adapter.getSelectors();
