import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task7parentComponent } from './task7parent/task7parent.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Task7parentComponent,Sibling1Component,Sibling2Component],
  exports:[Task7parentComponent,Sibling1Component,Sibling2Component]
})
export class Task7Module { }
