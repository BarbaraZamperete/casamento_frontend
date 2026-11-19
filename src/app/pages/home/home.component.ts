import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarroselSlideComponent } from '../../components/carrosel-slide/carrosel-slide.component';
import { SimpleNavBarComponent } from '../../components/navbar/simple-nav-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CarroselSlideComponent, SimpleNavBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  horadoconvite = "16:30";
  cerimonia = "17:00";
  recepcao = "18:30";
  jantar = "20:30";

  private intervalId: ReturnType<typeof setInterval> | undefined;
  // O evento acontece em Boa Vista, no fuso UTC-4.
  readonly weddingDate = new Date('2027-03-27T16:30:00-04:00');

  ngOnInit(): void {
    this.updateCountdown();

    this.intervalId = setInterval(() => this.updateCountdown(), 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId !== undefined) {
      clearInterval(this.intervalId);
    }
  }

  updateCountdown(): void {
    const distance = Math.max(0, this.weddingDate.getTime() - Date.now());

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

}

