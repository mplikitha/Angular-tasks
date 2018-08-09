import { Component, ViewChild ,AfterViewInit} from '@angular/core';
import{Sibling1Component} from '../sibling1/sibling1.component'
@Component({
  selector: 'app-task7parent',
  templateUrl: './task7parent.component.html',
  styleUrls: ['./task7parent.component.css']
})
export class Task7parentComponent  {

  

  @ViewChild(Sibling1Component) child;
  constructor() { }
  parentmessage:string;

  ngAfterViewInit() {
    this.parentmessage = this.child.message
  }

}
