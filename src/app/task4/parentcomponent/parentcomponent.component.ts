import { Component, OnInit } from '@angular/core';
import{ChildcomponentComponent} from './childcomponent/childcomponent.component'
@Component({
  selector: 'app-parentcomponent',
  template: `
  <h4>parent</h4>
  <app-childcomponent [childmessage]='parentmessage'></app-childcomponent>`,
  styleUrls: ['./parentcomponent.component.css']
})
export class ParentcomponentComponent implements OnInit {
  parentmessage : string = "I am passed from Parent to child component"
  constructor() { }

  ngOnInit() {
  }

}
