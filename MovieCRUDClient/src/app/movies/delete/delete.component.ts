import { Component, EventEmitter, Output } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { HttpClientService } from 'src/app/services/http-client.service';
import { DataTransitionService } from 'src/app/services/data-transition.service';
import { MovieService } from 'src/app/services/movie.service';
declare var $:any;

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
  @Output() deleteModalClosed: EventEmitter<void> = new EventEmitter<void>();
  constructor(private movieService : MovieService, private dataTransition : DataTransitionService){

  }
  closeDeleteModel(){
    $("#deleteModel").modal('hide')
    this.deleteModalClosed.emit();
  
  }
  deleteMovieButtonClick(){
    $("#DeleteButton").html(`<div class="spinner-border spinner-border-sm" role="status"></div>`)
    this.movieService.deleteMovie(this.dataTransition.deleteMovieId).then((value) => {
      this.closeDeleteModel();
      $("#DeleteButton").text("Yes");
    }).catch((err) => {
      console.error(err);
    })
  }

  openDeleteModal(){
    $("#deleteModel").modal('show')
  }
}
