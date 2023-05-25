import { Component } from '@angular/core';
import { CreateComponent } from './movies/create/create.component';
declare var $ : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private createComponent : CreateComponent) {
    
  }

  openCreateModel(){
    this.createComponent.showCreateModal();
  }

}
