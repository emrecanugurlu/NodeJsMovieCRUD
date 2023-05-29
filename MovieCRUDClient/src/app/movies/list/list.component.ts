import { Component, OnInit } from '@angular/core';
import {Movie} from "../../models/movie_model";
import { DeleteComponent } from '../delete/delete.component';
import { DataTransitionService } from 'src/app/services/data-transition.service';
import { MovieService } from 'src/app/services/movie.service';
import { UpdateComponent } from '../update/update.component';
declare var $:any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  public movieList : Movie[];
  deletedMovieId : string;
  constructor(
    private deleteComponent: DeleteComponent,
    private updateComponent : UpdateComponent,
     private dataTransition : DataTransitionService,
     private movieService : MovieService,
     ) {
      

     
  }
  ngOnInit(): void {
    
     this.initialMovies()
  }

  deleteMovieButtonClick(movie : Movie){    
    this.dataTransition.clickedMovie = movie
    this.deleteComponent.openDeleteModal();
  }

  initialMovies(){
    this.movieService.getMovies().then((value) =>{
      this.movieList=value
    }).catch((err) => {
      console.error(err);
    })
  }

  deleteModelClosed(){
    this.initialMovies();
  }

  updateMovieButton(movie : Movie){

    this.dataTransition.clickedMovie = movie
    this.updateComponent.openUpdateModal();
  }

  updateModalClosed(){
    this.initialMovies();
  }

}
