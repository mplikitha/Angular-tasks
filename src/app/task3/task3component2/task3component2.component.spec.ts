import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task3component2Component } from './task3component2.component';

describe('Task3component2Component', () => {
  let component: Task3component2Component;
  let fixture: ComponentFixture<Task3component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task3component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task3component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
