import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { Movie } from '../models/movie_model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClientService: HttpClientService) { }

  getMovies() {
    return new Promise((resolve, reject) => {
      this.httpClientService.getMovies().subscribe({
        error: (err) => {
          reject(err)
        },
        next: (value) => {
          resolve(value)
        },
      })
    })
  }

  postMovie({ 
    name,
    description,
    imdb,
    year,
  }){
    return new Promise((resolve,reject) =>{
      this.httpClientService.postMovie(
        { 
          name,description,imdb,year
        }
        ).subscribe({
          next(value) {
            resolve(value)
          },
          error(err) {
            reject(err)
          },
        }
      );
    })
  }
  deleteMovie(id :string){
    return new Promise((resolve, reject) =>{

      this.httpClientService.deleteMovie(id).subscribe({
        next(value) {
          resolve(value)
        },
        error(err) {
          reject(err)
        },
      })
    })
  }

  updateMovie({id,name,description,year,imdb}){
    this.httpClientService.updateMovie(
      {id,name,description,year,imdb}
      ).subscribe({
        next(value) {
          console.log(value);
        },
        error(err) {
          console.error(err);
        },
    })
  }


}
