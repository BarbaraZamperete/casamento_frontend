import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

export interface MOMENTO_CARD {
  imagem: string,
  titulo: string,
  descricao: string
}

@Component({
  selector: 'app-carrosel-slide',
  imports: [CommonModule],
  templateUrl: './carrosel-slide.component.html',
  styleUrl: './carrosel-slide.component.scss'
})
export class CarroselSlideComponent {



  cards: MOMENTO_CARD[] = [
    {
      titulo: "Kamila",
      imagem: "assets/images/default-image.png",
      descricao: `
      <ul>
        <li>Torcedora apaixonada do Vasco da Gama</li>
        <li>A mais competitiva da casa</li>
        <li>Principal fornecedora de surpresas românticas e criativas da relação</li>
        <li>Cozinha muito bem</li>
      </ul>
      `
    },
    {
      titulo: "Bárbara",
      imagem: "assets/images/default-image.png",
      descricao: `
      <ul>
          <li>Programadora responsável por este site</li>
          <li>Tem talento para desenho e trabalhos criativos</li>
          <li>Foi quem se apaixonou e disse "eu te amo" primeiro</li>
          <li>Adora fazer gambiarras e inventar projetos de marcenaria</li>
      </ul>
      `
    },
    {
      titulo: "Collina",
      imagem: "assets/images/nosso_lar/collina.jpeg",
      descricao: `
      <ul>
        <li>A primogênita da família</li>
        <li>Recebeu esse nome em homenagem ao "Gigante da Colina", o Vasco, time do coração da Kamila</li>
        <li>A mais medrosa da casa</li>
        <li>Escolheu sua família ao aparecer misteriosamente dentro do carro da Bárbara</li>
      </ul>
      `
    },
    {
      titulo: "Ada",
      imagem: "assets/images/nosso_lar/ada.png",
      descricao: `
      <ul>
        <li>A caçula da família</li>
        <li>Batizada em homenagem a Ada Lovelace, pioneira da computação</li>
        <li>A mais arteira e curiosa da casa</li>
        <li>Foi adotada para fazer companhia à Collina</li>
        <li>Adora conversar com suas humanas através de muitos miados</li>
      </ul>
      `
    },
  ]

  @ViewChild('scrollContainer')
  scrollContainer!: ElementRef<HTMLDivElement>

  scroll(direction: number): void {
    const container = this.scrollContainer.nativeElement;

    container.scrollBy({
      left: direction * 400,
      behavior: 'smooth'
    })
  }


  // getSlides(cardsPerSlide: number) {

  //   console.log('getSlides chamado');
  //   const slides = [];

  //   for (let i = 0; i < this.cards.length; i++) {

  //     const slide = [];

  //     for (let j = 0; j < cardsPerSlide; j++) {
  //       slide.push(
  //         this.cards[(i + j) % this.cards.length]
  //       );
  //     }

  //     slides.push(slide);
  //   }

  //   return slides;
  // }


}
