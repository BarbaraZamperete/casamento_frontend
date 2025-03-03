import { Component, OnInit, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { ApiService } from '../../services/api.service';
import { Presente } from '../../interfaces/presente.interface';
import { CarroselSlideComponent } from "../../components/carrosel-slide/carrosel-slide.component";
import { SimpleNavBarComponent } from "../../components/navbar/simple-nav-bar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FooterComponent, RouterModule, CarroselSlideComponent, SimpleNavBarComponent],
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

  loadPresentes() {
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
}

