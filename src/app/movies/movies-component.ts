import { Component, OnInit } from '@angular/core';

import { Movie } from './movie';
import { MovieService } from './movie-service';

@Component({
    moduleId: module.id,
    selector: 'my-movies',
    templateUrl: './movies-component.html',
    styleUrls: ['./movies-component.css']
})

export class MoviesComponent implements OnInit{

    movies: Movie[] = [];
    selectedMovie: Movie;

    constructor(private movieService: MovieService){}

    getMovies(): void {
        this.movieService.getMovies().then(movies => this.movies = movies);
    }

    ngOnInit(): void {
        this.getMovies();
    }

    onSelect(movie: Movie): void{
        this.selectedMovie = movie;
    }

}