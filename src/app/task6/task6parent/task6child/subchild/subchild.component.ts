import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subchild',
  templateUrl: './subchild.component.html',
  styleUrls: ['./subchild.component.css']
})
export class SubchildComponent implements OnInit {
  message= 'passing from subchild to parent';
  constructor() { }

  ngOnInit() {
  }

}
