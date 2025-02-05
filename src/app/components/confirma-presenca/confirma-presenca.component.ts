import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { SimpleNavBarComponent } from "../shared/simple-nav-bar/simple-nav-bar.component";
import { FooterComponent } from "../shared/footer/footer.component";
declare var bootstrap: any;

@Component({
  selector: 'app-confirma-presenca',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SimpleNavBarComponent, FooterComponent],
  templateUrl: './confirma-presenca.component.html',
  styleUrl: './confirma-presenca.component.scss'
})
export class ConfirmaPresencaComponent {
  searchForm: FormGroup;
  isLoading = false;
  showResults = false;
  showNotFound = false;
  guests: Array<{id: string, name: string, confirmed: boolean}> = [];
  isConfirming = false;
  toastMessage = '';


  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) {
    this.searchForm = this.formBuilder.group({
      searchType: ['code'],
      searchTerm: ['', Validators.required]
    });

  }

  onSearchTypeChange(type: 'code' | 'name'): void {
    this.searchForm.patchValue({ searchType: type, searchTerm: '' });
    this.showResults = this.showNotFound = false;
  }

  search(): void {
    if (this.searchForm.invalid) return;

    this.isLoading = true;
    this.showResults = this.showNotFound = false;

    const { searchType, searchTerm } = this.searchForm.value;
    const searchMethod = searchType === 'code' ?
      this.apiService.buscarPorConvite(searchTerm) :
      this.apiService.buscarPorNome(searchTerm);

    searchMethod.subscribe({
      next: (response) => {
        this.guests = response.map((guest: any) => ({
          id: guest.id,
          name: guest.nome,
          confirmed: guest.presenca_confirmada
        }));
        this.showResults = this.guests.length > 0;
        this.showNotFound = this.guests.length === 0;
        this.isLoading = false;
      },
      error: (error) => {
        console.error(`Erro ao buscar ${searchType === 'code' ? 'convite' : 'por nome'}:`, error);
        this.showNotFound = true;
        this.isLoading = false;
      }
    });
  }

  confirmPresence(): void {
    if (this.isConfirming) return;

    const guestsToConfirm = this.guests.map(guest => ({
      id: Number(guest.id),
      presenca_confirmada: guest.confirmed
    }));


    this.isConfirming = true;

    this.apiService.confirmarPresenca(guestsToConfirm).subscribe({
      next: (response) => {
        console.log(response);
        if (response.presenca_confirmada) {
          this.displayMessage('Presença confirmada com sucesso!', 'confirmado');
        } else {
          this.displayMessage('Confirmação de presença desfeita!', 'desconfirmado');
        }
        this.isConfirming = false;
        this.showResults = false;
        this.searchForm.reset({ searchType: 'code' });
        
      },
      error: (error) => {
        this.displayMessage('Erro ao confirmar presença!', 'erro');
        console.error('Erro ao confirmar presença:', error);
        this.isConfirming = false;
      }
    });
  }

  displayMessage(message: string, type: 'confirmado' | 'desconfirmado' | 'erro'): void {
    const toastElement = document.getElementById('toastPlacement');

    if (toastElement) {
      // Define o conteúdo da mensagem no Toast
    toastElement.classList.remove('confirmado', 'desconfirmado', 'erro');

      const toastBody = toastElement.querySelector('.toast-body');
      this.toastMessage = message;
      if (toastBody) {
        toastBody.textContent = message;
        switch (type) {
          case 'confirmado':
            toastElement.classList.add('confirmado');
            break;
          case 'desconfirmado':
            toastElement.classList.add('desconfirmado');
            break;
          default:
            toastElement.classList.add('erro');
            break;
        }
      }
  
      // Inicializa o Toast corretamente
      const toast = new bootstrap.Toast(toastElement, { delay: 1200 }); // Tempo de exibição: 1,2 segundos
      toast.show();
    }
  }

}
