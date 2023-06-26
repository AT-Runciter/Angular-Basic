import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenSuitsComponent } from './women-suits.component';

describe('WomenSuitsComponent', () => {
  let component: WomenSuitsComponent;
  let fixture: ComponentFixture<WomenSuitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomenSuitsComponent]
    });
    fixture = TestBed.createComponent(WomenSuitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
