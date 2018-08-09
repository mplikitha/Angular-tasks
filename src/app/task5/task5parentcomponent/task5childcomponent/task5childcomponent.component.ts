import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'task5child',
  templateUrl: './task5childcomponent.component.html',
  styleUrls: ['./task5childcomponent.component.css']
})
export class Task5childcomponentComponent implements OnInit {

  constructor() { }
  message = 'Hello, am passed from child ';
  ngOnInit() {
  }

}
