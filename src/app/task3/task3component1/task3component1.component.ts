import { Component} from '@angular/core';
 
@Component({
  selector: 'parent',
  template: `
        <h1>Welcome to {{title}}!</h1>
        <button (click)="increment()">Increment</button>
        <button (click)="decrement()">decrement</button>
        <child-component [count]=Counter></child-component>` ,

  styleUrls: ['./task3component1.component.css']
})
export class Task3component1Component {
  title = 'Component Interaction';
  Counter = 5;
 
  increment() {
    this.Counter++;
  }
  decrement() {
    this.Counter--;
  }

}
