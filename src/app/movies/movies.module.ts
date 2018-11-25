import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { moviesReducer } from './store/movies.reducer';
import { MoviesEffects } from './store/movies.effects';
import { MovieService } from './services/movie.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('movies', moviesReducer),
    EffectsModule.forFeature([MoviesEffects])
  ],
  declarations: [MoviesComponent],
  exports: [MoviesComponent],
  providers: [MovieService]
})
export class MoviesModule { }
