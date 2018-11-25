import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MoviesState } from '../store/movies.reducer';
import { Observable } from 'rxjs';
import { LoadMoviesAction } from '../store/movies.actions';
import {  selectAllMovies } from '../store/movies.selectors';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  moviename$: any;

  movieinfoLoadStatus$: any; //Observable<string>;
  //movieinfo$: Observable<MoviesState>;

  constructor(private store: Store<MoviesState>) {}

  ngOnInit() {
    this.moviename$ = this.store.pipe(select(selectAllMovies));
    this.store.dispatch(new LoadMoviesAction());
   // this.movieinfo$ = this.store.pipe(select(selectMoviesState));
    //this.movieinfoLoadStatus$ = this.store.pipe(select(selectAllMovies));
  }

  fetchGithubUserInfo(): void {
    this.store.dispatch(new LoadMoviesAction());
  }
}


