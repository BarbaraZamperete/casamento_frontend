import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface MOMENTO_CARD {
  id: number,
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
      id: 1,
      imagem: "",
      titulo: "Nos Conhecemos",
      descricao: "Tudo começou com um simples 'seguir' no Instagram. Uma coincidência curiosa nos conectou e, sem imaginar, estávamos iniciando uma nova história."
    },
    {
      id: 2,
      imagem: "",
      titulo: "Primeira Conversa",
      descricao: "Uma tatuagem, uma dúvida e uma história inusitada sobre uma agulha foram o ponto de partida para uma conexão cheia de sorrisos."
    },
    {
      id: 3,
      imagem: "",
      titulo: "Primeiro Encontro",
      descricao: `No dia <strong class='strong'>27 de março de 2021</strong>, nos encontramos pela primeira vez. Sorvete, parque e uma resposta inesperada sobre um beijo… O começo perfeito para algo especial.`
    },
    {
      id: 4,
      imagem: "",
      titulo: "Pedido de Namoro",
      descricao: "Após meses de encontros, brincadeiras e surpresas românticas, no dia 18 de junho de 2021, veio o pedido oficial: ‘Quer namorar comigo?’. E a resposta foi um ‘sim’ cheio de amor!"
    },
    {
      id: 5,
      imagem: "",
      titulo: "Primeiro 'Eu te amo'",
      descricao: "O primeiro 'eu te amo foi desenhado a dedo nas costas de Kamila que um tempo depois respondeu com um video com cartazes'"
    },
    {
      id: 6,
      imagem: "",
      titulo: "Nossas Viagens",
      descricao: "De Rio Grande do Sul a Rio de Janeiro, cada viagem nos trouxe novas memórias, aventuras inesquecíveis e reforçou ainda mais nossa parceria."
    },
    {
      id: 7,
      imagem: "",
      titulo: "Nosso Lar",
      descricao: "Em 30 de setembro de 2024, demos um grande passo: começamos a dividir o mesmo teto, construindo juntos o lar dos nossos sonhos e da nossa família."
    },
    {
      id: 8,
      imagem: "",
      titulo: "O Noivado",
      descricao: "No Réveillon de 2024, rodeadas pela família, um pedido emocionante marcou o início de uma nova fase. A resposta? Um ‘sim’ cheio de felicidade!"
    },
    {
      id: 9,
      imagem: "",
      titulo: "Nossa Parceria",
      descricao: "Com amor e cumplicidade, aprendemos que nossa força está na parceria. Sempre seguimos juntas, enfrentando desafios e celebrando cada conquista. Agora, estamos prontas para o nosso 'sim'!"
    }
  ];

  getSlides(cardsPerSlide: number) {
    return Array(Math.ceil(this.cards.length / cardsPerSlide))
      .fill(0)
      .map((_, i) => this.cards.slice(i * cardsPerSlide, (i + 1) * cardsPerSlide));
  }


}
