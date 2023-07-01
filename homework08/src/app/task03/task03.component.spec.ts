import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task03Component } from './task03.component';

describe('Task03Component', () => {
  let component: Task03Component;
  let fixture: ComponentFixture<Task03Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Task03Component]
    });
    fixture = TestBed.createComponent(Task03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
