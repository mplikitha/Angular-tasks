import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2component1',
  templateUrl: './task2component1.component.html',
  styleUrls: ['./task2component1.component.css'],
  template: `
  <p>Task2</p>
  <input (keyup)="onKey($event)">
  <p>{{values}}</p>`
  
})
export class Task2component1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  values = '';

  onKey(event: any) { // without type info
    this.values += event.target.value ;
  }
}

