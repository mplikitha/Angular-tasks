import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task7parentComponent } from './task7parent.component';

describe('Task7parentComponent', () => {
  let component: Task7parentComponent;
  let fixture: ComponentFixture<Task7parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task7parentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
