import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

import { MoviesComponent } from './movies/movies-component';
import { MovieService } from './movies/movie-service';
import { MovieDetailComponent } from './movies/movie-detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MoviesComponent, MovieDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ MovieService ]
})
export class AppModule { }
