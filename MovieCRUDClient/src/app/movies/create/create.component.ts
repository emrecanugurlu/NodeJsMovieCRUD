import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { MovieService } from 'src/app/services/movie.service';
declare var $: any

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  constructor(
    private movieService: MovieService, 
    private listComponent : ListComponent
    ) {

  }
  showCreateModal() {
    $("#exampleModalCenter").modal('show')
  }

  closeCreateModel() {
    $("#exampleModalCenter").modal('hide')
  }

  saveMovie() {

    $("#SaveButton").html(`<div class="spinner-border spinner-border-sm" role="status"></div>`)

    var movieName = $("#MovieForm #MovieName").val();
    var movieDescription = $("#MovieForm #MovieDescription").val();
    var movieYear = $("#MovieForm #MovieYear").val();
    var movieImdb = $("#MovieForm #MovieImdb").val();

    this.movieService.postMovie(
      {
        name: movieName,
        description: movieDescription,
        imdb : movieImdb,
        year : movieYear
      }).then((value)=>{
        this.listComponent.initialMovies();
        this.closeCreateModel()
        $("#SaveButton").text(`Save`)
      }).catch((err) =>{
        $("#SaveButton").text(`Save`)
        console.error(err);
      })
  }
}
