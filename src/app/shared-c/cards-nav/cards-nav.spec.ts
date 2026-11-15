import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { CardsNav } from './cards-nav';

describe('CardsNav', () => {
  let component: CardsNav;
  let fixture: ComponentFixture<CardsNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsNav],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsNav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
