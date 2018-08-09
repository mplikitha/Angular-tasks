import { Component, Input  } from '@angular/core';
 
@Component({
    selector: 'child-component',
    template: `<h4>second Component</h4>
               current count is {{ count }}
    `
})

export class Task3component2Component {

  @Input() count: number;

}
