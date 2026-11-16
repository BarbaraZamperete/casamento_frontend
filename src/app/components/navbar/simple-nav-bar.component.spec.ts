import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SimpleNavBarComponent } from './simple-nav-bar.component';

describe('SimpleNavBarComponent', () => {
  let component: SimpleNavBarComponent;
  let fixture: ComponentFixture<SimpleNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleNavBarComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve renderizar o template corretamente', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('nav')).toBeTruthy();
  });

  it('alternates the mobile menu and its expanded state', () => {
    const button = fixture.nativeElement.querySelector('.navbar-toggler') as HTMLButtonElement;
    const menu = fixture.nativeElement.querySelector('#navbarNav') as HTMLElement;

    button.click();
    fixture.detectChanges();

    expect(menu.classList.contains('show')).toBeTrue();
    expect(button.getAttribute('aria-expanded')).toBe('true');

    button.click();
    fixture.detectChanges();

    expect(menu.classList.contains('show')).toBeFalse();
    expect(button.getAttribute('aria-expanded')).toBe('false');
  });
});
