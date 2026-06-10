import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  image?: string;
}

@Component({
  selector: 'app-timeline',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {

  timelineItems: TimelineItem[] = [
    {
      date: '16/01/2021',
      title: 'Primeira troca de mensagens',
      description: `
      <p>Bárbara fez uma tatuagem e postou nos stories. Kamila, que também tinha interesse em fazer uma tatuagem um dia, aproveitou a oportunidade para puxar assunto e conversar sobre a experiência, perguntando como era a dor. E assim começou a conversa entre elas. Alguns anos depois, Bárbara daria de presente a Kamila a realização de sua primeira tatuagem.</p>`,
      image: 'assets/images/default-image.png'
    },
    {
      date: '27/03/2021',
      title: 'Primeiro beijo',
      description: `
      <p>Após alguns meses trocando apenas mensagens e videochamadas, já que a pandemia de COVID-19 ainda estava em andamento, Bárbara e Kamila marcaram seu primeiro encontro na gelateria Dois e 90. Após o sorvete, foram para a Praça do Mirandinha, de onde acabaram sendo “expulsas” por um fiscal devido às restrições da pandemia. Então resolveram ir para a Praça do Chefão. </p>
      <p>Sentadas na arquibancada de frente para a quadra de tênis, Kamila começou a fazer as perguntinhas que havia planejado para quebrar o gelo e conduzir o encontro ao objetivo final. A última pergunta era: “Em que lugar você gostaria de ser beijada?”.</p>
      <p>Bárbara ficou nervosa com a pergunta e quis fazer uma piada, mas acabou soando um tanto estranha ao responder que gostaria de ser beijada no dedão do pé. E foi assim que surgiu o primeiro beijo da história delas. E algum tempo depois, até o beijo no dedão do pé ocorreu!</p>`,
      image: 'assets/images/default-image.png'
    },
    {
      date: '18/06/2021',
      title: 'Pedido de namoro',
      description: `
      <p>Após o primeiro beijo, as duas nunca mais deixaram de se ver. Toda semana havia encontrinhos, todos cheios de surpresinhas românticas, desenhos, chocolates, poemas, músicas e brincadeiras. Em junho, Bárbara viajou, e as duas passaram algumas semanas conversando por longas videochamadas. Nesse tempo, o coração finalmente se abriu por completo, e a paixão floresceu entre elas.</p>
      <p>Ao retornar da viagem, Kamila a presenteou com uma caneca de gatinhos e vários coraçõeszinhos de papel, cada um com uma palavra formando a frase: “Quem sabe você quer namorar comigo?”. É claro que Bárbara disse que sim.</p>`,
      image: 'assets/images/default-image.png'
    },
    {
      date: '25/12/2021',
      title: 'Eu te amo',
      description: `
      <p>Em uma tarde de um dia qualquer, após alguns meses de namoro, Kamila encontrava-se deitada nos braços de Bárbara. Estavam conversando tranquilamente quando Bárbara sentiu vontade de revelar um sentimento, porém, é claro, de uma forma um tanto quanto diferente. Ela desenhou nas costas de Kamila as letras da frase “Eu te amo”, enquanto Kamila ia soletrando até compreender a mensagem por completo.</p>
      <p>No Natal daquele ano, Kamila estava em viagem para Manaus. Mesmo à distância, gravou um vídeo segurando placas e, à medida que as mostrava, revelava que também amava Bárbara.</p>`,
      image: 'assets/images/default-image.png'
    },
    {
      date: '2021 e contando',
      title: 'Aventuras',
      description: `
      <p>Durante os anos de namoro, Kamila e Bárbara viveram muitas aventuras, viagens e perrengues que depois viraram histórias para contar (como a caminhada no Morro da Tijuca e o episódio em que ficaram perdidas à noite no meio da estrada no Rio Grande do Norte, entre outros). Também enfrentaram desafios que se transformaram em aprendizados e contribuíram para a evolução do casal.</p>
      <p>Além disso, viveram muitos encontros especiais, compartilharam diversos jogos e brincadeiras (como as Olimpíadas das Namoradas, Overcooked e jogos de tabuleiro, entre outros) e colecionaram momentos inesquecíveis. Foram todas essas experiências que ajudaram a construir a relação de duas mulheres muito companheiras, melhores amigas e com uma conexão única.</p>`,
      image: 'assets/images/default-image.png'
    },
    {
      date: '30/09/2024',
      title: 'Morar juntas',
      description: `
      <p>Em setembro de 2024, Kamila e Bárbara resolveram dar um próximo passo em sua relação e juntaram oficialmente as escovas de dentes. Essa mudança de fase veio acompanhada de muitos desafios, mas elas se mantiveram unidas e firmes, pois são mais fortes assim.</p>
      <p>Também foi uma fase que trouxe muito aprendizado, evolução e inúmeras experiências positivas para o casal. Entre elas, a decisão de aumentar a família com a chegada de duas gatinhas muito especiais: primeiro a Collina, cujo nome foi inspirado no apelido "Gigante da Colina", como é conhecido o Vasco, time do coração da Kamila; e depois a Ada, batizada em homenagem a Ada Lovelace, a matemática considerada a autora do primeiro algoritmo de computador da história</p>
      <p>Desde então, as duas passaram a dividir não apenas a casa e a rotina, mas também a companhia, as travessuras e o carinho de suas novas companheiras felinas.'</p>`,
      image: 'assets/images/default-image.png'
    },
    {
      date: '01/01/2025',
      title: 'Noivado',
      description: `
      <p>No réveillon, sob o brilho dos fogos de artifício e perante as pessoas mais importantes da família das duas, Kamila se declarou para Bárbara, ajoelhou-se no gramado e a pediu em casamento. Não havia nenhuma dúvida: Bárbara disse sim!</p>
      <p>No entanto, Bárbara acreditava que Kamila também deveria viver a experiência de ser pedida em casamento. Alguns meses depois, durante uma viagem para o Rio Grande do Norte, na cidade de São Miguel do Gostoso, Bárbara organizou para que o quarto estivesse todo decorado e fez sua declaração quando chegaram à hospedagem.</p>
      <p>Houve alguns probleminhas técnicos, como por exemplo a Bárbara ter esquecido de registrar o momento, mas são justamente essas peculiaridades que tornam a história ainda mais especial. Um momento que, infelizmente, está gravado apenas na memória das duas.</p>`,
      image: 'assets/images/default-image.png'
    },
    {
      date: '27/03/2027',
      title: 'Casamento',
      description: `
      <p>E enfim chegamos a mais um grande marco na história desse casal, que tem a felicidade de poder comemorar este momento ao lado de pessoas tão especiais.</p>
      <p>Tudo começou com uma simples conversa sobre uma tatuagem. Depois vieram os encontros, os bilhetinhos, os chocolates, as videochamadas, as viagens, as aventuras, os aprendizados, as conquistas, os desafios, os gatos, a casa compartilhada e o sonho de construir uma vida juntas.</p>
      <p>Hoje, cercadas por familiares e amigos, Bárbara e Kamila celebram não apenas o amor que as uniu, mas também toda a caminhada que percorreram até aqui. E este é apenas o começo de muitos novos capítulos que ainda serão escritos.</p>
      <p>Obrigada por fazer parte dessa história.</p>`,
      image: 'assets/images/default-image.png'
    }
  ]

}
