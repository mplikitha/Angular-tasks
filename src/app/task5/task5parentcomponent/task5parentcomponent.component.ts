import { Component, ViewChild, AfterViewInit } from '@angular/core';
import{Task5childcomponentComponent} from './task5childcomponent/task5childcomponent.component'
@Component({
  selector: 'task5parent',
  templateUrl: './task5parentcomponent.component.html',
  styleUrls: ['./task5parentcomponent.component.css']
})
export class Task5parentcomponentComponent  {
  @ViewChild(Task5childcomponentComponent) child;
  constructor() { }
  message:string;

  ngAfterViewInit() {
    this.message = this.child.message
  }

}
