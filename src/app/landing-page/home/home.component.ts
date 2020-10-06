import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieInformation } from 'src/app/shared/models/movie-information';
import { LoginService } from 'src/app/shared/services/login.service';
import { MovieUtilityService } from 'src/app/shared/services/movie-utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movieContext: MovieInformation;
  email: string = 'test@test.com';
  password: string = 'test';
  isValidMail: boolean;
  errorString: string;
  date: Date = new Date();

  constructor(private movieService: MovieUtilityService,
    private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.movieService.getMovieByYear(this.getRandomAlphabet(), new Date().getFullYear().toString()).subscribe(response => {
      this.movieContext = response as MovieInformation;
    });
  }

  getRandomAlphabet(): string {
    var items = ["A", "T", "L"];
    return items[Math.floor(Math.random() * items.length)];
  }

  onNoMailEntered(event: boolean) {
    this.isValidMail = false;
    this.errorString = 'Enter email id to continue...';
  }

  onInvalidEmailEntered(event: boolean) {
    this.isValidMail = event;
    if (!this.isValidMail) {
      this.errorString = 'Invalid email id...';
    }
  }

  onLoginButtonClicked() {
    this.loginService.validateUserLogin(this.email, this.password).subscribe(response => {
      if (response === true) {
        this.router.navigateByUrl('/home');
      }
    });
  }
}
