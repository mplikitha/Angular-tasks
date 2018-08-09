import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task5parentcomponentComponent } from './task5parentcomponent.component';

describe('Task5parentcomponentComponent', () => {
  let component: Task5parentcomponentComponent;
  let fixture: ComponentFixture<Task5parentcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task5parentcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task5parentcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
