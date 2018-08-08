import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-component1',
//   templateUrl: './component1.component.html',
//   styleUrls: ['./component1.component.css']
// })
// @Component({
//   selector: 'app-click-me',
//   template: `
//      <button (click)="onClickMe()">Click me!</button>
//      {{clickMessage}}`
// })

@Component({
  selector: 'app-click-me',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  // clickMessage = '';

  // onClickMe() {
  //   this.clickMessage = 'text message is displaying';
  // }
private text;
printtext(text){
  console.log(text)
}
  

}
