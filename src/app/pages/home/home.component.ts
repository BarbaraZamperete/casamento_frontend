import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
// import { ApiService } from '../../services/api.service';
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
  // presentesPreview: Presente[] = [];
  // isLoading = true;

  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  private intervalId: any;
  weddingDate = new Date('2027-03-27T16:30:00-04:00');

  // constructor(private apiService: ApiService) {}

  ngOnInit() {
    // this.loadPresentes();
    this.updateCountdown();

    this.intervalId = setInterval(() => {
      this.updateCountdown();
    }, 1000);

  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  updateCountdown(): void {
    const now = new Date().getTime();
    const distance = this.weddingDate.getTime() - now;

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));

    this.hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
    );

    this.minutes = Math.floor(
      (distance % (1000 * 60 * 60)) /
      (1000 * 60)
    );

    this.seconds = Math.floor(
      (distance % (1000 * 60)) /
      1000
    );
  }

  // loadPresentes() {
  //   this.apiService.getPresentes().subscribe({
  //     next: (presentes) => {
  //       this.presentesPreview = presentes.slice(0, 3);
  //       this.isLoading = false;
  //     },
  //     error: (error) => {
  //       console.error('Erro ao carregar presentes:', error);
  //       this.isLoading = false;
  //     }
  //   });
  // }
}

