import { Component } from '@angular/core';
import { HttpClientService } from 'src/app/services/http-client.service';
import { ListComponent } from '../list/list.component';
declare var $ : any

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  constructor(private httpClientService : HttpClientService,private listComponent : ListComponent){
    
  }
  showCreateModal(){
    $("#exampleModalCenter").modal('show')
  }

  closeCreateModel(){
    $("#exampleModalCenter").modal('hide')
  }

  saveMovie(){

    $("#SaveButton").html(`<div class="spinner-border spinner-border-sm" role="status"></div>`)

    var movieName = $("#MovieForm #MovieName").val();
    var movieDescription = $("#MovieForm #MovieDescription").val();
    var movieYear = $("#MovieForm #MovieYear").val();
    var movieImdb = $("#MovieForm #MovieImdb").val();


    console.log("Tetiklendi")
    this.httpClientService.postMovie(
      { 
        name : movieName,
        description : movieDescription,
        imdb: movieImdb,
        year: movieYear
      }
      ).subscribe(
      response => {
        this.closeCreateModel()
        this.listComponent.initialMovies()
        $("#SaveButton").text(`Save`)
        
      },
      error => {
        $("#SaveButton").text(`Save`)
        console.error('Hata:', error);
      }
      
    );
  }
}
