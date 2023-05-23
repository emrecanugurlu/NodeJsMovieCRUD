import { Component } from '@angular/core';
import {HttpClientService} from "./services/http-client.service";
import {Movie} from "./models/movie_model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {

  }
}
