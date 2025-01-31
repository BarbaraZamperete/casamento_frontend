import { Component, OnInit, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from '../shared/footer/footer.component';
import { ApiService } from '../../services/api.service';
import { Presente } from '../../interfaces/presente.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FooterComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  presentesPreview: Presente[] = [];
  isLoading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadPresentes();
  }

  private loadPresentes() {
    this.apiService.getPresentes().subscribe({
      next: (presentes) => {
        this.presentesPreview = presentes.slice(0, 3);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar presentes:', error);
        this.isLoading = false;
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (window.scrollY > window.innerHeight - 100) {
        navbar.classList.add('scrolled');
        navbar.classList.remove('bg-transparent');
      } else {
        navbar.classList.remove('scrolled');
        navbar.classList.add('bg-transparent');
      }
    }
  }
}
