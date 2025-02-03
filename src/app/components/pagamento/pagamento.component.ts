// frontend/src/app/components/pagamento/pagamento.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { SimpleNavBarComponent } from "../shared/simple-nav-bar/simple-nav-bar.component";
import { FooterComponent } from "../shared/footer/footer.component";
@Component({
  selector: 'app-pagamento',
  standalone: true,
  imports: [CommonModule, SimpleNavBarComponent, FooterComponent],
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
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.produtoId = params['id'];
      this.produtoNome = params['nome'];
      this.produtoValor = params['valor'];
      this.convidadoId = params['convidadoId'];

      this.pegarQrcode();
    });
  }

  pegarQrcode() {
    if (this.produtoId && this.produtoValor && this.convidadoId) {
      this.apiService.gerarCompra(this.produtoId, this.produtoValor, this.convidadoId).subscribe((response: any) => {
        this.qrCodeUrl = response
        console.log(this.qrCodeUrl);
      });
    }
  }

  confirmarPagamento() {
    this.pagamentoEfetuado = true;
  }
}
