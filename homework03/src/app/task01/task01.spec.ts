import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task01Component } from './task01.component';

describe('MyComponentComponent', () => {
  let component: Task01Component;
  let fixture: ComponentFixture<Task01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
