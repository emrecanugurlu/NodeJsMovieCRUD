import { AfterViewInit, Component } from '@angular/core';
import { DataTransitionService } from 'src/app/services/data-transition.service';
import { MovieService } from 'src/app/services/movie.service';
declare var $: any;

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements AfterViewInit {

  movieId : number;
  movieName : string;
  movieDescription : string;
  movieYear : string;
  movieImdb : string

  constructor(
    private dataTransition: DataTransitionService,
    private movieService: MovieService) {

      

  }
  ngAfterViewInit(): void {
   
  }

  openUpdateModal() {
    debugger;
    if (this.dataTransition.clickedMovie != null) {
      this.movieId = this.dataTransition.clickedMovie.Id
      this.movieName = this.dataTransition.clickedMovie.Name
      this.movieDescription = this.dataTransition.clickedMovie.Description
      this.movieYear = this.dataTransition.clickedMovie.Year
      this.movieImdb = this.dataTransition.clickedMovie.Imdb
      
      $("#MovieName").val(`${this.movieName}`)
      $("#MovieDescription").val(`${this.movieDescription}`)
      $("#MovieYear").val(`${this.movieYear}`)
      $("#MovieImdb").val(`${this.movieImdb}`)
    }


    $("#updateModal").modal('show');
  }
  closeUpdateModal() {
    $("#updateModal").modal('hide');
  }

  updateMovie() {

    
    this.movieService.updateMovie(
      {
        id: this.movieId,
        name: this.movieName,
        description: this.movieDescription,
        year: this.movieYear,
        imdb: this.movieImdb
      })
  }

}
