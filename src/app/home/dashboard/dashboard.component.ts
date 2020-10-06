import { Component, HostListener, OnInit } from '@angular/core';
import { MovieInformation } from 'src/app/shared/models/movie-information';
import { ImageUtilityService } from 'src/app/shared/services/image-utility.service';
import { MovieUtilityService } from 'src/app/shared/services/movie-utility.service';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    movieToSearch: string = "";
    movie: MovieInformation;
    movieGenre: string[] = [];

    constructor(private movieUtilityService: MovieUtilityService,
        private imageUtilService: ImageUtilityService) {
        // this.movieToSearch = 'Interstellar';
        // this.searchMovie();
    }

    ngOnInit(): void {
    }

    searchMovie() {
        this.movieUtilityService.searchMovies(this.movieToSearch).subscribe(resp => {
            this.movie = resp as MovieInformation;
            this.populateMovieGenre();
            console.log(this.movie);
        });
    }

    @HostListener('document:keydown.enter', ['$event']) onKeydownHandler(event: KeyboardEvent) {
        this.searchMovie();
    }

    populateMovieGenre() {
        this.movie.Genre.split(',').forEach(element => {
            this.movieGenre.push(element.trim());
        });
    }
}
