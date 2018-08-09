import { Component, ViewChild, AfterViewInit } from '@angular/core';
import{Task6childComponent} from './task6child/task6child.component'
@Component({
  selector: 'app-task6parent',
  templateUrl: './task6parent.component.html',
  styleUrls: ['./task6parent.component.css']
})
export class Task6parentComponent  {
@ViewChild(Task6childComponent) subchild
  constructor() { }
  message:string;

  ngAfterViewInit() {
    this.message = this.subchild.message
  }

}
