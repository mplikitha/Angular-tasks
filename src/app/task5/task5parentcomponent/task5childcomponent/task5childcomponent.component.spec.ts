import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task5childcomponentComponent } from './task5childcomponent.component';

describe('Task5childcomponentComponent', () => {
  let component: Task5childcomponentComponent;
  let fixture: ComponentFixture<Task5childcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task5childcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task5childcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
