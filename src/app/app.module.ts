import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Task1Module} from './task1/task1.module'
import { Component1Component } from './task1/component1/component1.component';
import { Component2Component } from './task3/component2/component2.component';
import { Task2component1Component } from './task2/task2component1/task2component1.component';
import {Task2Module} from './task2/task2.module'
@NgModule({
  declarations: [
    AppComponent,
    
    Component1Component,
    Task2component1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
