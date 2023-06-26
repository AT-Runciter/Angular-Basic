import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenSuitsComponent } from './men-suits.component';

describe('MenSuitsComponent', () => {
  let component: MenSuitsComponent;
  let fixture: ComponentFixture<MenSuitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenSuitsComponent]
    });
    fixture = TestBed.createComponent(MenSuitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
