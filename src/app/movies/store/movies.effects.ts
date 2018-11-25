import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { MovieService } from '../../movies/services/movie.service';
import { of } from 'rxjs';
import { LoadMoviesAction, MoviesActionTypes, LoadMoviesSuccessAction, LoadMoviesFailureAction } from './movies.actions';
import { Movie } from '../model/movie.model';

@Injectable()
export class MoviesEffects {

  @Effect()
  laodMoviesEffect$ = this.actions$.pipe(
    ofType<LoadMoviesAction>(MoviesActionTypes.LoadMovies),
    mergeMap(action => this.movieService.getGitHubUser()),
    map((movies: Movie[]) => {
      return new LoadMoviesSuccessAction({ movies });
    }),
    catchError(() => {
      return of(new LoadMoviesFailureAction());
    })
  );

  constructor(
    private actions$: Actions,
    private movieService: MovieService
  ) {}
}
