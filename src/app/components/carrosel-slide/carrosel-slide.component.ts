import { Component, ElementRef, ViewChild } from '@angular/core';

interface MomentoCard {
  imagem: string;
  titulo: string;
  descricao: string[];
}

@Component({
  selector: 'app-carrosel-slide',
  templateUrl: './carrosel-slide.component.html',
  styleUrl: './carrosel-slide.component.scss'
})
export class CarroselSlideComponent {
  readonly cards: MomentoCard[] = [
    {
      titulo: 'Kamila',
      imagem: 'assets/images/default-image.webp',
      descricao: [
        'Torcedora apaixonada do Vasco da Gama',
        'A mais competitiva da casa',
        'Principal fornecedora de surpresas românticas e criativas da relação',
        'Cozinha muito bem'
      ]
    },
    {
      titulo: 'Bárbara',
      imagem: 'assets/images/default-image.webp',
      descricao: [
        'Programadora responsável por este site',
        'Tem talento para desenho e trabalhos criativos',
        'Foi quem se apaixonou e disse "eu te amo" primeiro',
        'Adora fazer gambiarras e inventar projetos de marcenaria'
      ]
    },
    {
      titulo: 'Collina',
      imagem: 'assets/images/nosso_lar/collina.webp',
      descricao: [
        'A primogênita da família',
        'Recebeu esse nome em homenagem ao "Gigante da Colina", o Vasco, time do coração da Kamila',
        'A mais medrosa da casa',
        'Escolheu sua família ao aparecer misteriosamente dentro do carro da Bárbara'
      ]
    },
    {
      titulo: 'Ada',
      imagem: 'assets/images/nosso_lar/ada.webp',
      descricao: [
        'A caçula da família',
        'Batizada em homenagem a Ada Lovelace, pioneira da computação',
        'A mais arteira e curiosa da casa',
        'Foi adotada para fazer companhia à Collina',
        'Adora conversar com suas humanas através de muitos miados'
      ]
    }
  ];

  @ViewChild('scrollContainer', { static: true })
  private scrollContainer!: ElementRef<HTMLDivElement>;

  scroll(direction: -1 | 1): void {
    const container = this.scrollContainer.nativeElement;

    container.scrollBy({
      left: direction * container.clientWidth * 0.8,
      behavior: 'smooth'
    });
  }
}
