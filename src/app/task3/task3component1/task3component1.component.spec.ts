import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task3component1Component } from './task3component1.component';

describe('Task3component1Component', () => {
  let component: Task3component1Component;
  let fixture: ComponentFixture<Task3component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task3component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task3component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
