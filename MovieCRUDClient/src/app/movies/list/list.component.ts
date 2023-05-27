import { Component, OnInit } from '@angular/core';
import {Movie} from "../../models/movie_model";
import { DeleteComponent } from '../delete/delete.component';
import { DataTransitionService } from 'src/app/services/data-transition.service';
import { MovieService } from 'src/app/services/movie.service';
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
    this.dataTransition.deleteMovieId = this.movieList[index].Id.toString()
  }

  deleteModelClosed(){
    this.initialMovies();
  }

}
