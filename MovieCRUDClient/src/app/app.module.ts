import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MoviesModule} from "./movies/movies.module";
import {HttpClientModule} from "@angular/common/http";
import { CreateComponent } from './movies/create/create.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoviesModule,
    HttpClientModule,
    MoviesModule
  ],
  providers: [CreateComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
