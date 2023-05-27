import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';



@NgModule({
    declarations: [
        MoviesComponent,
        ListComponent,
        CreateComponent,
        UpdateComponent,
        DeleteComponent
    ],
    exports: [
        MoviesComponent
    ],
    imports: [
        CommonModule
    ],
    providers : [ListComponent,DeleteComponent]
    
})
export class MoviesModule { }
