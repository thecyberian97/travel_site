import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousalComponentComponent } from './carousal-component.component';

describe('CarousalComponentComponent', () => {
  let component: CarousalComponentComponent;
  let fixture: ComponentFixture<CarousalComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarousalComponentComponent]
    });
    fixture = TestBed.createComponent(CarousalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
