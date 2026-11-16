import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-simple-nav-bar',
  imports: [RouterLink],
  templateUrl: './simple-nav-bar.component.html',
  styleUrl: './simple-nav-bar.component.scss'
})
export class SimpleNavBarComponent {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
