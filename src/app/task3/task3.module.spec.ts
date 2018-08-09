import { Task3Module } from './task3.module';
import{Task3component1Component} from './task3component1/task3component1.component'
import{Task3component2Component} from './task3component2/task3component2.component'
describe('Task3Module', () => {
  let task3Module: Task3Module;

  beforeEach(() => {
    task3Module = new Task3Module();
  });

  it('should create an instance', () => {
    expect(task3Module).toBeTruthy();
  });
});
