import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  template: `
  <h4>child</h4>
  <p>Say{{childmessage}}</p>`,
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {
  @Input() childmessage: string ;
  constructor() { }

  ngOnInit() {
  }

}
