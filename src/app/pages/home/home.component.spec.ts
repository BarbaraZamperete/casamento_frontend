import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let component: HomeComponent;

  beforeEach(async () => {
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date('2027-03-26T16:30:00-04:00'));

    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
    jasmine.clock().uninstall();
  });

  it('calculates the countdown to the wedding date', () => {
    expect(component.days).toBe(1);
    expect(component.hours).toBe(0);
    expect(component.minutes).toBe(0);
    expect(component.seconds).toBe(0);
  });

  it('places the sticky navbar directly below the hero', () => {
    const hero = fixture.nativeElement.querySelector('.hero') as HTMLElement;
    const navbar = fixture.nativeElement.querySelector('.navbar') as HTMLElement;

    expect(hero.compareDocumentPosition(navbar) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(navbar.classList.contains('sticky-top')).toBeTrue();
  });

  it('does not show negative values after the wedding date', () => {
    jasmine.clock().mockDate(new Date('2027-03-28T16:30:00-04:00'));

    component.updateCountdown();

    expect(component.days).toBe(0);
    expect(component.hours).toBe(0);
    expect(component.minutes).toBe(0);
    expect(component.seconds).toBe(0);
  });
});
