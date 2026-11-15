import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Home } from './home';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should defer home images until the intro starts closing', () => {
    const images = Array.from(fixture.nativeElement.querySelectorAll('img')) as HTMLImageElement[];

    expect(images.length).toBeGreaterThan(0);
    expect(images.some((image) => image.hasAttribute('src'))).toBe(false);

    component.finishIntro();
    fixture.detectChanges();

    expect(images.every((image) => image.hasAttribute('src'))).toBe(true);
    expect(images.every((image) => image.getAttribute('loading') === 'eager')).toBe(true);
  });
});
