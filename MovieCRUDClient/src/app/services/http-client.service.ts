import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UrlService} from "./url.service";
import {Movie} from "../models/movie_model";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http : HttpClient, private urlService : UrlService) { }

  getMovies(){
    return this.http.get<Movie[]>(`${this.urlService.baseUrl}/movies`);
  }

  postMovie({name,description,year,imdb}){
    return this.http.post(`${this.urlService.baseUrl}/movie`, {name , description, year, imdb});
  }

  deleteMovie(id:string){
    return this.http.delete(`${this.urlService.baseUrl}/movies/${id}`);
  }
}

