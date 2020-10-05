import { Component, OnInit } from '@angular/core';
import { MovieInformation } from 'src/app/shared/models/movie-information';
import { MovieUtilityService } from 'src/app/shared/services/movie-utility.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private movieUtilityService: MovieUtilityService) { }

  movieToSearch: string = "";
  movie: MovieInformation;

  ngOnInit(): void {
  }

  searchMovie() {
    this.movieUtilityService.searchMovies(this.movieToSearch).subscribe(resp => {
      this.movie = resp as MovieInformation;
    });
  }

}
