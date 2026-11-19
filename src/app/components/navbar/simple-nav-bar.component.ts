import { Component, ElementRef, HostListener, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-simple-nav-bar',
  imports: [RouterLink],
  templateUrl: './simple-nav-bar.component.html',
  styleUrl: './simple-nav-bar.component.scss'
})
export class SimpleNavBarComponent {
  @Input() fixed = false;
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  closeMenuOnOutsideClick(event: MouseEvent): void {
    if (this.isMenuOpen && !this.elementRef.nativeElement.contains(event.target as Node)) {
      this.closeMenu();
    }
  }
}
