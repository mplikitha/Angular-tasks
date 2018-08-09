import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Task1Module} from './task1/task1.module'
import { Component1Component } from './task1/component1/component1.component';

import { Task2component1Component } from './task2/task2component1/task2component1.component';
import {Task2Module} from './task2/task2.module';
import { Task3component1Component } from './task3/task3component1/task3component1.component';
import { Task3component2Component } from './task3/task3component2/task3component2.component'
@NgModule({
  declarations: [
    AppComponent,
    
    Component1Component,
    Task2component1Component,
    Task3component1Component,
    Task3component2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
