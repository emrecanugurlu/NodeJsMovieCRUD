import { Component, EventEmitter, Output } from '@angular/core';
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
    $("#updateMovieName").val(this.dataTransition.clickedMovie.name)
    $("#updateMovieDescription").val(this.dataTransition.clickedMovie.description)
    $("#updateMovieYear").val(this.dataTransition.clickedMovie.year)
    $("#updateMovieImdb").val(this.dataTransition.clickedMovie.imdb)
  }


  closeUpdateModal() {
    $("#updateModal").modal('hide');
    this.updateModalClosed.emit();
  }

  updateMovie() {

    $("#UpdateButton").html(`<div class="spinner-border spinner-border-sm" role="status"></div>`)

    var updatedMovieId = this.dataTransition.clickedMovie.id
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
      }).then(value =>{
        $("#UpdateButton").text(`Save`)
        console.log(value)
        this.closeUpdateModal()
      }).catch(err =>{
        $("#UpdateButton").text(`Save`)
        console.log(err)
      })
  }

}
