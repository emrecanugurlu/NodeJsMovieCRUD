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
    return this.http.post(`${this.urlService.baseUrl}/movies`, {name , description, year, imdb});
  }

  deleteMovie(id:string){
    return this.http.delete(`${this.urlService.baseUrl}/movies/${id}`);
  }

  updateMovie({id,name,description,year,imdb}){
    return this.http.put(`${this.urlService.baseUrl}/movies/${id}`,{name,description,year,imdb});
  }
}

