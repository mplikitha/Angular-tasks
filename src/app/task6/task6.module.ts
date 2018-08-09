import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task6parentComponent } from './task6parent/task6parent.component';
import { Task6childComponent } from './task6parent/task6child/task6child.component';
import { SubchildComponent } from './task6parent/task6child/subchild/subchild.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Task6parentComponent,Task6childComponent,SubchildComponent],
  exports:[Task6parentComponent,Task6childComponent,SubchildComponent]
})
export class Task6Module { }
