import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import { Movie } from 'src/app/models/movie_model';
import { DataTransitionService } from 'src/app/services/data-transition.service';
import { MovieService } from 'src/app/services/movie.service';
declare var $: any;

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  @Output() updateModalClosed: EventEmitter<void> = new EventEmitter<void>();
  constructor(
    private dataTransition: DataTransitionService,
    private movieService: MovieService) {

  }

  openUpdateModal() {

    $("#updateModal").modal('show');
    $("#updateMovieName").val(this.dataTransition.clickedMovie.Name)
    $("#updateMovieDescription").val(this.dataTransition.clickedMovie.Description)
    $("#updateMovieYear").val(this.dataTransition.clickedMovie.Year)
    $("#updateMovieImdb").val(this.dataTransition.clickedMovie.Imdb)
  }


  closeUpdateModal() {
    $("#updateModal").modal('hide');
    this.updateModalClosed.emit();
  }

  updateMovie() {

    var updatedMovieId = this.dataTransition.clickedMovie.Id
    var updatedMovieName = $("#updateMovieName").val()
    var updatedMovieDescription = $("#updateMovieDescription").val()
    var updatedMovieYear = $("#updateMovieYear").val()
    var updatedMovieImdb = $("#updateMovieImdb").val()

    this.movieService.updateMovie(
      {
        id: updatedMovieId,
        name: updatedMovieName,
        description: updatedMovieDescription,
        year: updatedMovieYear,
        imdb: updatedMovieImdb
      })

      this.closeUpdateModal()

  }

}
