import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Task1Module} from './task1/task1.module'
import { Component1Component } from './task1/component1/component1.component';

import { Task2component1Component } from './task2/task2component1/task2component1.component';
import {Task2Module} from './task2/task2.module';
import { Task3component1Component } from './task3/task3component1/task3component1.component';
import { Task3component2Component } from './task3/task3component2/task3component2.component';
import { ParentcomponentComponent } from './task4/parentcomponent/parentcomponent.component';
import { ChildcomponentComponent } from './task4/parentcomponent/childcomponent/childcomponent.component';
import { Task5parentcomponentComponent } from './task5/task5parentcomponent/task5parentcomponent.component';
import { Task5childcomponentComponent } from './task5/task5parentcomponent/task5childcomponent/task5childcomponent.component';
import { Task6parentComponent } from './task6/task6parent/task6parent.component';
import{SubchildComponent} from './task6/task6parent/task6child/subchild/subchild.component'
import { Task6childComponent } from './task6/task6parent/task6child/task6child.component';
import { Sibling1Component } from './task7/sibling1/sibling1.component';
import { Sibling2Component } from './task7/sibling2/sibling2.component';
import{Task7parentComponent}from './task7/task7parent/task7parent.component'
@NgModule({
  declarations: [
    AppComponent,
    
    Component1Component,
    Task2component1Component,
    Task3component1Component,
    Task3component2Component,
    ParentcomponentComponent,
    ChildcomponentComponent,
    Task5parentcomponentComponent,
    Task5childcomponentComponent,
    Task6parentComponent,
    SubchildComponent,
    Task6childComponent,
    Sibling1Component,
    Sibling2Component,
    Task7parentComponent
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
