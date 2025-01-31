import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../shared/footer/footer.component';
import { ApiService } from '../../services/api.service';
import { SimpleNavBarComponent } from "../shared/simple-nav-bar/simple-nav-bar.component";
import { Presente } from '../../interfaces/presente.interface';
declare var bootstrap: any;

@Component({
  selector: 'app-lista-presentes',
  standalone: true,
  imports: [CommonModule, FooterComponent, SimpleNavBarComponent],
  templateUrl: './lista-presentes.component.html',
  styleUrl: './lista-presentes.component.scss'
})
export class ListaPresentesComponent {
  presentes: Presente[] = [];
  presenteSelecionado: Presente | null = null;

  constructor(private apiService: ApiService ) {
    this.apiService.getPresentes().subscribe((presentes: any) => {
      this.presentes = presentes;
    });
  }

  comprarPresente(presente: any) {
    this.presenteSelecionado = presente;
    // Abre o modal usando Bootstrap
    const modal = document.getElementById('confirmacaoModal');
    if (modal) {
      const bootstrapModal = new bootstrap.Modal(modal);
      bootstrapModal.show();
    }
  }

  confirmarCompra() {
    if (this.presenteSelecionado) {
      // Aqui você pode adicionar a lógica para processar o pagamento
      // Por exemplo, redirecionar para uma página de pagamento
      console.log('Processando compra do presente:', this.presenteSelecionado);

      // Fecha o modal
      const modal = document.getElementById('confirmacaoModal');
      if (modal) {
        const bootstrapModal = bootstrap.Modal.getInstance(modal);
        bootstrapModal?.hide();
      }
    }
  }
}

