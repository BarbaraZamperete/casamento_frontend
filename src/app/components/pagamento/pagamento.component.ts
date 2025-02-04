// frontend/src/app/components/pagamento/pagamento.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { SimpleNavBarComponent } from "../shared/simple-nav-bar/simple-nav-bar.component";
import { FooterComponent } from "../shared/footer/footer.component";
declare var bootstrap: any;

@Component({
  selector: 'app-pagamento',
  standalone: true,
  imports: [CommonModule, SimpleNavBarComponent, FooterComponent, RouterModule],
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss']
})
export class PagamentoComponent implements OnInit {
  qrCodeUrl: string | null = null;
  produtoId: string | null = null;
  produtoNome: string | null = null;
  produtoValor: number | null = null;
  pagamentoEfetuado: boolean = false;
  convidadoId: string | null = null;

  // Novas propriedades para armazenar as lojas
  lojasFisicas: any[] = [];
  lojasVirtuais: any[] = [];

  // Propriedade para controlar a exibição do modal
  showModal: boolean = false;
  showFeedbackMessage: boolean = false;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.produtoId = params['id'];
      this.produtoNome = params['nome'];
      this.produtoValor = params['valor'];
      this.convidadoId = params['convidadoId'];

      this.pegarQrcode();
      this.pegarLojas();
    });
  }

  pegarQrcode() {
    if (this.produtoId && this.produtoValor && this.convidadoId) {
      this.apiService.gerarCompra(this.produtoId, this.produtoValor, this.convidadoId).subscribe((response: any) => {
        this.qrCodeUrl = response;
      });
    }
  }

  pegarLojas() {
    if (this.produtoId) {
      this.apiService.getLojas(this.produtoId).subscribe((response: any) => {
        console.log(response);
        // Limpa as listas antes de adicionar novas lojas
        this.lojasFisicas = [];
        this.lojasVirtuais = [];

        // Classifica as lojas em físicas e virtuais
        response.forEach((loja: any) => {
          if (loja.tipo === 'fisica') {
            this.lojasFisicas.push(loja);
          } else if (loja.tipo === 'virtual') {
            this.lojasVirtuais.push(loja);
          }
        });
      });
    }
  }

  confirmarPagamento() {
    this.pagamentoEfetuado = true;
    const modal = document.getElementById('modalAgradecimento');
    if (modal) {
      const bootstrapModal = new bootstrap.Modal(modal);
      bootstrapModal.show();
    }
  }

  closeModal() {
    const modal = document.getElementById('modalAgradecimento');
    if (modal) {
      const bootstrapModal = bootstrap.Modal.getInstance(modal);
      bootstrapModal?.hide();
    }
  }

  gotHome() {
    this.closeModal();
    this.router.navigate(['/']);
  }

  copyToClipboard(endereco: string) {
    navigator.clipboard.writeText(endereco).then(() => {
      this.showFeedbackMessage = true;
      setTimeout(() => {
        this.showFeedbackMessage = false;
      }, 2000);
    }).catch(err => {
      console.error('Erro ao copiar o endereço: ', err);
    });
  }
}
