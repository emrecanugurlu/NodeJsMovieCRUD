import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';



@NgModule({
    declarations: [
        MoviesComponent,
        ListComponent,
        CreateComponent,
        UpdateComponent
    ],
    exports: [
        ListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class MoviesModule { }
