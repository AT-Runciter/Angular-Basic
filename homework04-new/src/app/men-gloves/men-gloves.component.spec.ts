import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenGlovesComponent } from './men-gloves.component';

describe('MenGlovesComponent', () => {
  let component: MenGlovesComponent;
  let fixture: ComponentFixture<MenGlovesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenGlovesComponent]
    });
    fixture = TestBed.createComponent(MenGlovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
