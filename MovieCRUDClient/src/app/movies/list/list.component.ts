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
  movieList : Movie[];
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

  deleteMovieButtonClick(){    
    this.deleteComponent.openDeleteModal();
  }

  initialMovies(){
    this.movieService.getMovies().then((value) =>{
      this.movieList = value as Movie[]
    }).catch((err) => {
      console.error(err);
    })
  }

  deleteMovie(){
      
  }

  onRowClick(index){
    this.dataTransition.clickedMovie = this.movieList[index]
  }

  deleteModelClosed(){
    this.initialMovies();
  }

  updateMovieButton(){
    this.updateComponent.openUpdateModal();
  }

}
