import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component  {
@Input() child2message:string;
  constructor() { }

  ngOnInit() {
  }

}
