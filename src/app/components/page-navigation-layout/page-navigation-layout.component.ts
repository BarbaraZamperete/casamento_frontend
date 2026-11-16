import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SimpleNavBarComponent } from '../navbar/simple-nav-bar.component';

@Component({
  selector: 'app-page-navigation-layout',
  imports: [RouterOutlet, SimpleNavBarComponent],
  templateUrl: './page-navigation-layout.component.html',
  styleUrl: './page-navigation-layout.component.scss'
})
export class PageNavigationLayoutComponent {}
