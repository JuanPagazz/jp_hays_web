import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsNav } from './cards-nav';

describe('CardsNav', () => {
  let component: CardsNav;
  let fixture: ComponentFixture<CardsNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsNav],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsNav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
