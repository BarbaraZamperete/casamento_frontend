import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { ApiService } from '../../services/api.service';
import { SimpleNavBarComponent } from "../../components/navbar/simple-nav-bar.component";
import { Presente } from '../../interfaces/presente.interface';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Convidado } from '../../interfaces/convidado.interface';
declare var bootstrap: any;

@Component({
  selector: 'app-lista-presentes',
  standalone: true,
  imports: [CommonModule, FooterComponent, SimpleNavBarComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './lista-presentes.component.html',
  styleUrl: './lista-presentes.component.scss'
})
export class ListaPresentesComponent {
  presentes: Presente[] = [];
  presenteSelecionado: Presente | null = null;
  searchForm: FormGroup;
  guests: Convidado[] = [];
  showResults = false;
  showNotFound = false;
  isLoading = false;

  constructor(private apiService: ApiService, private router: Router, private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      searchTerm: ['', Validators.required]
    });
  }

  ngOnInit() {
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

  search(): void {
    if (this.searchForm.invalid) return;

    this.isLoading = true;
    this.showResults = this.showNotFound = false;

    const searchTerm = this.searchForm.value.searchTerm;

    this.apiService.buscarPorNome(searchTerm).subscribe({
      next: (response) => {
        this.guests = response;
        this.showResults = this.guests.length > 0;
        this.showNotFound = this.guests.length === 0;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erro ao buscar convidados:', error);
        this.showNotFound = true;
        this.isLoading = false;
      }
    });
  }

  confirmarCompra(convidado: Convidado) {
    if (this.presenteSelecionado && convidado) {
      // Lógica para processar o pagamento
      console.log('Processando compra do presente:', this.presenteSelecionado);


      // Redirecionar para a página de pagamento com os parâmetros necessários
      if (this.presenteSelecionado) {
        this.router.navigate(['/pagamento'], {
          queryParams: {
            id: this.presenteSelecionado.id,
            nome: this.presenteSelecionado.nome,
            valor: this.presenteSelecionado.valor,
            link_compra: this.presenteSelecionado.link_compra,
            convidadoId: convidado.id
          }
        });
      };

      // Fecha o modal
      const modal = document.getElementById('confirmacaoModal');
      if (modal) {
        const bootstrapModal = bootstrap.Modal.getInstance(modal);
        bootstrapModal?.hide();
      }
    } else {
      console.error('É necessário selecionar um presente e identificar o convidado.');
    }
  }
}

