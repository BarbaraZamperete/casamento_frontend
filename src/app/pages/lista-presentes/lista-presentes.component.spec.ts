import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ListaPresentesComponent } from './lista-presentes.component';
import { ApiService } from '../../services/api.service';
import { of, throwError } from 'rxjs';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Convidado } from '../../interfaces/convidado.interface';
import { Presente } from '../../interfaces/presente.interface';
declare var bootstrap: any;
declare global {
  interface Window {
    bootstrap: any;
  }
}


describe('ListaPresentesComponent', () => {
  let component: ListaPresentesComponent;
  let fixture: ComponentFixture<ListaPresentesComponent>;
  let apiService: ApiService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule, ListaPresentesComponent],
      providers: [ApiService, Router]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPresentesComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    router = TestBed.inject(Router);
    fixture.detectChanges();

    // Mock do bootstrap
    const mockModal = jasmine.createSpyObj('Modal', ['show', 'hide', 'dispose', 'getInstance']);
    mockModal.getInstance.and.returnValue(mockModal);
    (window as any).bootstrap = {
      Modal: jasmine.createSpy('Modal').and.returnValue(mockModal)
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty presentes and guests lists', () => {
    expect(component.presentes).toEqual([]);
    expect(component.guests).toEqual([]);
    expect(component.showResults).toBeFalse();
    expect(component.showNotFound).toBeFalse();
    expect(component.isLoading).toBeFalse();
  });

  it('should fetch presentes on component initialization', fakeAsync(() => {
    const mockPresentes: Presente[] = [
      { id: 1, nome: 'Presente 1', valor: 50, link_compra: 'link1', descricao: 'Descrição do presente 1', imagem: 'img1.jpg' },
      { id: 2, nome: 'Presente 2', valor: 100, link_compra: 'link2', descricao: 'Descrição do presente 2', imagem: 'img2.jpg' }
    ];
  
    spyOn(apiService, 'getPresentes').and.returnValue(of(mockPresentes));
  
    component.ngOnInit(); // Chamar manualmente para garantir execução
  
    tick(); // Processa assincronamente o Observable
    fixture.detectChanges(); // Atualiza o template
  
    expect(component.presentes).toEqual(mockPresentes);
  }));
  

  it('should call search method and update guests on successful response', () => {
    const mockGuests: Convidado[] = [
      { id: '1', nome: 'John Doe', email: 'john.doe@example.com', telefone: '1234567890', presenca_confirmada: true },
      { id: '2', nome: 'Jane Doe', email: 'jane.doe@example.com', telefone: '1234567890', presenca_confirmada: true }
    ];
    spyOn(apiService, 'buscarPorNome').and.returnValue(of(mockGuests));

    component.searchForm.setValue({ searchTerm: 'John' });
    component.search();

    fixture.detectChanges();

    expect(component.guests.length).toBe(2);
    expect(component.showResults).toBeTrue();
    expect(component.showNotFound).toBeFalse();
    expect(component.isLoading).toBeFalse();
  });

  it('should set showNotFound to true when no guests are found', () => {
    spyOn(apiService, 'buscarPorNome').and.returnValue(of([]));

    component.searchForm.setValue({ searchTerm: 'NonExistentName' });
    component.search();

    expect(component.showNotFound).toBeTrue();
    expect(component.showResults).toBeFalse();
    expect(component.isLoading).toBeFalse();
  });

  it('should handle error in search method and set showNotFound to true', () => {
    spyOn(apiService, 'buscarPorNome').and.returnValue(throwError('Error'));

    component.searchForm.setValue({ searchTerm: 'ErrorTest' });
    component.search();

    fixture.detectChanges();

    expect(component.showNotFound).toBeTrue();
    expect(component.isLoading).toBeFalse();
  });

  it('should show modal when comprarPresente is called', () => {
    const mockPresente: Presente = { id: 1, nome: 'Presente Teste', valor: 50, link_compra: 'link', descricao: 'Descrição do presente 1', imagem: 'img1.jpg' };
  
    component.comprarPresente(mockPresente);
  
    expect(component.presenteSelecionado).toEqual(mockPresente);
    expect(window.bootstrap.Modal).toHaveBeenCalledWith(document.getElementById('confirmacaoModal'));
    expect(window.bootstrap.Modal().show).toHaveBeenCalled();
  });

  // it('should navigate to pagamento page on confirmarCompra', () => {
  //   const mockPresente: Presente = { id: 1, nome: 'Presente Teste', valor: 50, link_compra: 'link', descricao: 'Descrição do presente 1', imagem: 'img1.jpg' };
  //   const mockConvidado: Convidado = { id: '1', nome: 'John Doe', email: 'john.doe@example.com', telefone: '1234567890', presenca_confirmada: true };

  //   component.presenteSelecionado = mockPresente;

  //   spyOn(router, 'navigate');

  //   component.confirmarCompra(mockConvidado);

  //   expect(router.navigate).toHaveBeenCalledWith(['/pagamento'], {
  //     queryParams: {
  //       id: mockPresente.id,
  //       nome: mockPresente.nome,
  //       valor: mockPresente.valor,
  //       link_compra: mockPresente.link_compra,
  //       convidadoId: mockConvidado.id
  //     }
  //   });
  //   const mockModal = window.bootstrap.Modal();
  //   expect(mockModal.show).toHaveBeenCalled();
  // });

  it('should log error if no presente is selected in confirmarCompra', () => {
    const consoleErrorSpy = spyOn(console, 'error');

    component.confirmarCompra({ id: '1', nome: 'John Doe', email: 'john.doe@example.com', telefone: '1234567890', presenca_confirmada: true } as Convidado);

    expect(consoleErrorSpy).toHaveBeenCalledWith('É necessário selecionar um presente e identificar o convidado.');
  });
});
