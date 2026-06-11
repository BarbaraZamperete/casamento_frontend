import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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

  // cards: MOMENTO_CARD[] = [
  //   {
  //     id: 1,
  //     imagem: "",
  //     titulo: "Nos Conhecemos",
  //     descricao: "Tudo começou com um simples 'seguir' no Instagram. Uma coincidência curiosa nos conectou e, sem imaginar, estávamos iniciando uma nova história."
  //   },
  //   {
  //     id: 2,
  //     imagem: "",
  //     titulo: "Primeira Conversa",
  //     descricao: "Uma tatuagem, uma dúvida e uma história inusitada sobre uma agulha foram o ponto de partida para uma conexão cheia de sorrisos."
  //   },
  //   {
  //     id: 3,
  //     imagem: "",
  //     titulo: "Primeiro Encontro",
  //     descricao: `No dia <strong class='strong'>27 de março de 2021</strong>, nos encontramos pela primeira vez. Sorvete, parque e uma resposta inesperada sobre um beijo… O começo perfeito para algo especial.`
  //   },
  //   {
  //     id: 4,
  //     imagem: "",
  //     titulo: "Pedido de Namoro",
  //     descricao: "Após meses de encontros, brincadeiras e surpresas românticas, no dia <strong class='strong'> 18 de junho de 2021 </strong>, veio o pedido oficial: ‘Quer namorar comigo?’. E a resposta foi um ‘sim’ cheio de amor!"
  //   },
  //   {
  //     id: 5,
  //     imagem: "",
  //     titulo: "Eu te amo",
  //     descricao: "O primeiro 'eu te amo foi desenhado a dedo nas costas de Kamila que um tempo depois respondeu com um video com cartazes'"
  //   },
  //   {
  //     id: 6,
  //     imagem: "",
  //     titulo: "Nossas Viagens",
  //     descricao: "De Rio Grande do Sul ao Rio Grande do Norte, cada viagem nos trouxe novas memórias, aventuras inesquecíveis e reforçou ainda mais nossa parceria."
  //   },
  //   {
  //     id: 7,
  //     imagem: "",
  //     titulo: "Nosso Lar",
  //     descricao: "Em <strong class='strong'> 30 de setembro de 2024 </strong>, demos um grande passo: começamos a dividir o mesmo teto, construindo juntos o lar dos nossos sonhos e da nossa família."
  //   },
  //   {
  //     id: 8,
  //     imagem: "",
  //     titulo: "O Noivado",
  //     descricao: "No Réveillon de 2024, rodeadas pela família, um pedido emocionante marcou o início de uma nova fase. A resposta? Um ‘sim’ cheio de felicidade!"
  //   },
  //   {
  //     id: 9,
  //     imagem: "",
  //     titulo: "Nossa Parceria",
  //     descricao: "Com amor e cumplicidade, aprendemos que nossa força está na parceria. Sempre seguimos juntas, enfrentando desafios e celebrando cada conquista. Agora, estamos prontas para celebrar e oficializar a nossa união!"
  //   }
  // ];


  cards: MOMENTO_CARD[] = [
    {
      titulo: "Kamila",
      imagem: "assets/images/default-image.png",
      descricao: "..."
    },
    {
      titulo: "Bárbara",
      imagem: "assets/images/default-image.png",
      descricao: "..."
    },
    {
      titulo: "Collina",
      imagem: "assets/images/default-image.png",
      descricao: "..."
    },
    {
      titulo: "Ada",
      imagem: "assets/images/default-image.png",
      descricao: "..."
    },
  ]

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
