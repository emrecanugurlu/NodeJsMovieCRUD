import { Component, OnInit } from '@angular/core';
import {HttpClientService} from "../../services/http-client.service";
import {Movie} from "../../models/movie_model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  movieList : Movie[];
  constructor(private httpClient : HttpClientService) {
    
  }
  ngOnInit(): void {
    this.initialMovies()
  }

  deleteMovie(){
    
  }

  initialMovies(){
    this.httpClient.getMovies().subscribe((value) =>{
      this.movieList = value
    })
  }
}
