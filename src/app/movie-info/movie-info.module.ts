import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieInfoContainerComponent } from './movie-info-container/movie-info-container.component';
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { SearchHistoryComponent } from "./search-history/search-history.component";

@NgModule({
  declarations: [
    MovieInfoContainerComponent,
    MovieDetailsComponent,
    SearchHistoryComponent
  ],
  imports: [
    CommonModule
  ],
  bootstrap: [MovieInfoContainerComponent]
})
export class MovieInfoModule { }
