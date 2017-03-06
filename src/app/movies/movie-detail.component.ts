import { Component, Input } from '@angular/core';

import { Movie } from './movie';

@Component({
    moduleId: module.id,
    selector: 'my-movie-detail',
    templateUrl: './movie-detail.component.html'
})

export class MovieDetailComponent{
    @Input()
    movie: Movie;

}