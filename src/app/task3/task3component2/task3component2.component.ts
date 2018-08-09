import { Component, Input  } from '@angular/core';
 
@Component({
    selector: 'child-component',
    template: `<h2>second Component</h2>
               current count is {{ count }}
    `
})

export class Task3component2Component {

  @Input() count: number;

}
