import { Component } from '@angular/core';
import {HttpClientService} from "../../services/http-client.service";
import {Movie} from "../../models/movie_model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  movieList : Movie[];
  constructor(private httpClient : HttpClientService) {
    httpClient.getMovies().subscribe((value) =>{
      console.log("deneme")
      this.movieList = value
      console.log(this.movieList[0])
    })
  }
}
