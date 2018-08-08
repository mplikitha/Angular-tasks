import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task2component1Component } from './task2component1.component';

describe('Task2component1Component', () => {
  let component: Task2component1Component;
  let fixture: ComponentFixture<Task2component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task2component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task2component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
