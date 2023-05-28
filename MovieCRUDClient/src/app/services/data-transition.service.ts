import { Injectable } from '@angular/core';
import { Movie } from '../models/movie_model';

@Injectable({
  providedIn: 'root'
})
export class DataTransitionService {
  clickedMovie : Movie
  constructor() { }
}
