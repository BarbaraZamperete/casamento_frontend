import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

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
  styleUrl: './timeline.component.scss',
  animations: [
    trigger('expandCollapse', [

      state('closed', style({
        height: '0px',
        opacity: 0,
        marginTop: '0px',
        overflow: 'hidden'
      })),

      state('open', style({
        height: '*',
        opacity: 1,
        marginTop: '1rem',
        overflow: 'hidden'
      })),

      transition('closed <=> open', [
        animate('450ms cubic-bezier(0.22, 0.61, 0.36, 1)')
      ])

    ])
  ]
})
export class TimelineComponent {

  timelineItems: TimelineItem[] = [
    {
      date: '16/01/2021',
      title: 'Uma troca de mensagens',
      description: `
      <p>Um story no Instagram e uma pergunta sobre uma tatuagem marcaram o nosso primeiro contato. Depois vieram os gatos, os filmes, os livros e tantos outros assuntos que surgiram quase sem percebermos.</p>
      <p>Naquele início, nenhuma de nós imaginava onde aquelas conversas poderiam nos levar. Éramos duas pessoas que, em momentos diferentes de recomeço, encontraram uma na outra uma companhia leve e agradável em meio à pandemia. Aos poucos, as mensagens deixaram de ser ocasionais e passaram a fazer parte da rotina.</p>
      <p>O Instagram deu lugar ao WhatsApp. Entre chamadas de vídeo, risadas, descobertas e o prazer de conhecer alguém novo, nasceu uma vontade simples: continuar ali, uma na companhia da outra.</p>
      <p>Sem grandes planos, sem pressa e sem imaginar o que o futuro nos reservava, uma troca de mensagens acabou se tornando o <span class="destaque">início de tudo</span> .</p>`,
      image: 'assets/images/default-image.png'
    },
    {
      date: '27/03/2021',
      title: 'Um beijo e tantos mais',
      description: `
      <p>Depois de algum tempo entre longas conversas pelo WhatsApp, chegou o dia do nosso primeiro encontro. Escolhemos uma sorveteria para finalmente nos conhecermos além das telas. A ansiedade fazia parte daquele momento para nós duas. O encontro começou com um leve silêncio, mas bastaram poucos minutos para que a conexão construída pelas mensagens voltasse a aparecer, agora frente a frente. </p>
      <p>Após o sorvete, seguimos para a Praça do Mirandinha, de onde tivemos que sair por causa das restrições da pandemia. Então, fomos para a Praça do Chefão. Sentadas lado a lado na arquibancada em frente à quadra de tênis, Kamila começou a fazer algumas perguntas que havia preparado para ajudar a vencer a timidez. A última delas era especial: "Em que lugar você gostaria de ser beijada?" </p>
      <p>Para disfarçar o nervosismo, Bárbara resolveu fazer uma piada, mas acabou soando um tanto estranha ao responder "No dedão do pé." Isso causou um breve desconcerto que logo deu lugar às risadas e, pouco tempo depois, o primeiro beijo finalmente aconteceu. </p>
      <p>Ao final do encontro, caminhamos de mãos dadas até os carros. Antes da despedida, Kamila entregou pequenas <span class="destaque">flores de sakura</span> perfumadas e uma cartinha que havia preparado para aquele momento. Dentro dela havia apenas uma pergunta:</p>
      <p>"Você quer sair comigo novamente?"</p>
      <p>☐ Sim  ☐ Não  ☐ Talvez</p>
      <p>Encerrávamos aquele dia com a sensação de que aquele seria apenas o <span class="destaque"> primeiro de muitos encontros </span>.</p>
      `,
      image: 'assets/images/default-image.png'
    },
    {
      date: '18/06/2021',
      title: 'O início de nós',
      description: `
      <p>Depois do primeiro encontro, nunca mais deixamos de nos ver. Vieram muitos outros, quase sempre na mesma praça, que acabou se tornando <span class="destaque">"a nossa praça"</span>. Nem a chuva era motivo para desmarcar. Entre chocolates, desenhos, poemas, playlists, pequenas surpresas e longas conversas, fomos criando memórias sem perceber que, aos poucos, algo maior também estava sendo construído.</p>
      <p>No início, combinamos que apenas deixaríamos as coisas acontecerem. Nenhuma de nós buscava um relacionamento sério naquele momento. Mas o carinho crescia a cada encontro e, sem que percebêssemos, aquilo que parecia leve e despretensioso começou a ganhar um novo significado.</p>
      <p>Nem todo começo é feito apenas de certezas. Em meio ao caminho, enfrentamos um momento delicado que nos levou a uma conversa difícil, mas completamente sincera. Foi ali que escolhemos confiar uma na outra e dar uma chance ao que estava florescendo entre nós.</p>
      <p>A partir dali, seguimos vivendo um dia de cada vez. A confiança se fortaleceu, as conversas continuaram, os encontros nunca deixaram de acontecer e, quando a distância trouxe a saudade durante uma viagem ao Rio Grande do Sul, percebemos que aquilo que tentávamos não nomear já fazia parte de nós.</p>
      <p>No dia <span class="destaque"> 18 de junho de 2021 </span>, uma caneca de gatinhos e vários corações de papel formando a pergunta "Quem sabe você quer namorar comigo?" marcaram o nosso pedido de namoro. É claro que Bárbara disse que sim.</p>
      <p>Aquilo que já vinha sendo construído havia muito tempo finalmente ganhou um nome, e o nosso "nós" começou a criar raízes ainda mais profundas.</p>`,
      image: 'assets/images/default-image.png'
    },
    {
      date: '25/12/2021',
      title: 'No silêncio, o amor ecoou',
      description: `
      <p>Alguns sentimentos chegam de mansinho. Não fazem barulho, apenas encontram um jeito de existir.</p>
      <p>Em uma tarde qualquer, após alguns meses de namoro, enquanto descansávamos abraçadas, Bárbara teve vontade de revelar um sentimento e encontrou uma forma diferente de dizer aquilo que sentia. Com a ponta dos dedos, desenhou lentamente nas costas de Kamila as letras de uma frase. À medida que cada letra era soletrada, a mensagem foi ganhando sentido.</p>
      <p><span class="destaque">"Eu te amo." </span></p>
      <p>Aquelas palavras transbordaram o amor que já existia, mas Kamila ainda precisava de tempo para que seu próprio coração alcançasse o mesmo compasso. E Bárbara respeitou esse tempo.</p>
      <p>A resposta de Kamila veio meses depois, durante uma viagem de Natal. Também sem dizer uma única palavra. Segurando pequenas placas diante da câmera, revelou, uma a uma, a mesma frase que um dia havia sido escrita em suas costas.</p>
      <p>Às vezes, o amor não precisa ser dito em voz alta. Basta encontrar o momento certo para ecoar.</p>`,
      image: 'assets/images/default-image.png'
    },
    {
      date: '2021 e contando',
      title: 'Construindo memórias',
      description: `
      <p>Com o passar do tempo, colecionamos muito mais do que datas especiais. Colecionamos histórias. </p>
      <p>Tivemos viagens inesquecíveis, aventuras, as Olimpíadas das Namoradas, alguns perrengues que, na hora, pareciam enormes e que hoje rendem boas risadas</p>
      <p>Houve dias difíceis, desafios inesperados e momentos que nos ensinaram que enfrentar o mundo quando estamos juntas é menos complicado. </p>
      <p>E na nossa jornada também existem as alegrias simples: tardes de jogos de tabuleiro, partidas de Overcooked, encontros que não precisam de motivo e incontáveis momentos em que descobrimos que a melhor companhia sempre é uma da outra. Entre grandes aventuras e pequenos instantes do dia a dia, continuamos construindo as lembranças mais valiosas.</p>
      <p>Cada experiência, divertida ou desafiadora, fortalece nossa amizade, nossa parceria e a certeza de que encontramos, uma na outra, alguém com quem vale a pena caminhar pela vida.</p>
      <p>Porque, no fim, são as memórias compartilhadas que entrelaçam dois caminhos em uma única história.</p>`,
      image: 'assets/images/default-image.png'
    },
    {
      date: '30/09/2024',
      title: 'Nosso lugarzinho',
      description: `
      <p>Em setembro de 2024, Kamila e Bárbara resolveram dar um próximo passo em sua relação e juntaram oficialmente as escovas de dentes. Essa mudança de fase veio acompanhada de muitos desafios, mas elas se mantiveram unidas e firmes, pois são mais fortes assim.</p>
      <p>Também foi uma fase que trouxe muito aprendizado, evolução e inúmeras experiências positivas para o casal. Entre elas, a decisão de aumentar a família com a chegada de duas gatinhas muito especiais: Collina e Ada.</p>
      <p>Desde então, as duas passaram a dividir não apenas a casa e a rotina, mas também a companhia, as travessuras e o carinho de suas novas companheiras felinas.</p>`,
      image: 'assets/images/timeline/morar-juntas.jpeg'
    },
    {
      date: '01/01/2025',
      title: 'O sim',
      description: `
      <p>No réveillon, sob o brilho dos fogos de artifício e perante as pessoas mais importantes da família das duas, Kamila se declarou para Bárbara, ajoelhou-se no gramado e a pediu em casamento. Não havia nenhuma dúvida: Bárbara disse sim!</p>
      <p>No entanto, Bárbara acreditava que Kamila também deveria viver a experiência de ser pedida em casamento. Alguns meses depois, durante uma viagem para o Rio Grande do Norte, na cidade de São Miguel do Gostoso, Bárbara organizou para que o quarto estivesse todo decorado e fez sua declaração quando chegaram à hospedagem.</p>
      <p>Houve alguns probleminhas técnicos, como por exemplo a Bárbara ter esquecido de registrar o momento, mas são justamente essas peculiaridades que tornam a história ainda mais especial. Um momento que, infelizmente, está gravado apenas na memória das duas.</p>`,
      image: 'assets/images/timeline/noivado.jpeg'
    },
    {
      date: '27/03/2027',
      title: 'Para sempre nós',
      description: `
      <p>E enfim chegamos a mais um grande marco na história desse casal, que tem a felicidade de poder comemorar este momento ao lado de pessoas tão especiais.</p>
      <p>Tudo começou com uma simples conversa sobre uma tatuagem. Depois vieram os encontros, os bilhetinhos, os chocolates, as videochamadas, as viagens, as aventuras, os aprendizados, as conquistas, os desafios, os gatos, a casa compartilhada e o sonho de construir uma vida juntas.</p>
      <p>Hoje, cercadas por familiares e amigos, Bárbara e Kamila celebram não apenas o amor que as uniu, mas também toda a caminhada que percorreram até aqui. E este é apenas o começo de muitos novos capítulos que ainda serão escritos.</p>
      <p>Obrigada por fazer parte dessa história.</p>`,
      image: 'assets/images/timeline/casamento.jpeg'
    }
  ]


  expandedIndex: number | null = 0

  toggle(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

}
