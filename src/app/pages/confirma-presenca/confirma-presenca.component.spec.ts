import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ConfirmaPresencaComponent } from './confirma-presenca.component';
import { of, throwError } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

declare var bootstrap: any;

describe('ConfirmaPresencaComponent', () => {
  let component: ConfirmaPresencaComponent;
  let fixture: ComponentFixture<ConfirmaPresencaComponent>;
  let apiService: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule, ConfirmaPresencaComponent], // Importe os módulos necessários
      providers: [FormBuilder, ApiService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmaPresencaComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    fixture.detectChanges();

    // Mock do bootstrap
    (window as any).bootstrap = {
      Toast: jasmine.createSpy('Toast').and.returnValue({
        show: jasmine.createSpy('show')
      })
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the search form with default values', () => {
    expect(component.searchForm.value.searchType).toBe('code');
    expect(component.searchForm.value.searchTerm).toBe('');
  });

  it('should change searchType and reset searchTerm when onSearchTypeChange is called', () => {
    component.onSearchTypeChange('name');
    expect(component.searchForm.value.searchType).toBe('name');
    expect(component.searchForm.value.searchTerm).toBe('');
    expect(component.showResults).toBeFalse();
    expect(component.showNotFound).toBeFalse();
  });

  it('should call search method and update guests on successful response', () => {
    const response = [{ id: '1', nome: 'John Doe', presenca_confirmada: true }];
    spyOn(apiService, 'buscarPorConvite').and.returnValue(of(response)); // Mock da API

    component.searchForm.setValue({ searchType: 'code', searchTerm: '123' });
    component.search();

    expect(component.guests.length).toBe(1);
    expect(component.showResults).toBeTrue();
    expect(component.showNotFound).toBeFalse();
    expect(component.isLoading).toBeFalse();
  });

  it('should set showNotFound to true when no guests are found', () => {
    spyOn(apiService, 'buscarPorConvite').and.returnValue(of([])); // Mock da API

    component.searchForm.setValue({ searchType: 'code', searchTerm: '123' });
    component.search();

    expect(component.showNotFound).toBeTrue();
    expect(component.showResults).toBeFalse();
    expect(component.isLoading).toBeFalse();
  });

  it('should handle error in search method and set showNotFound to true', () => {
    spyOn(apiService, 'buscarPorConvite').and.returnValue(throwError('Error')); // Mock de erro

    component.searchForm.setValue({ searchType: 'code', searchTerm: '123' });
    component.search();

    expect(component.showNotFound).toBeTrue();
    expect(component.isLoading).toBeFalse();
  });

  it('should confirm presence and show success message', () => {
    const response = { presenca_confirmada: true };
    spyOn(apiService, 'confirmarPresenca').and.returnValue(of(response)); // Mock da API
    spyOn(component, 'displayMessage'); // Espionar displayMessage para garantir que o toast é chamado

    component.guests = [{ id: '1', name: 'John Doe', confirmed: true }];
    component.confirmPresence();

    expect(component.isConfirming).toBeFalse();
    expect(component.showResults).toBeFalse();
    expect(component.displayMessage).toHaveBeenCalledWith('Presença confirmada com sucesso!', 'confirmado');
  });

  it('should handle error in confirmPresence and show error message', () => {
    spyOn(apiService, 'confirmarPresenca').and.returnValue(throwError('Error')); // Mock de erro
    spyOn(component, 'displayMessage'); // Espionar displayMessage para garantir que o toast é chamado

    component.guests = [{ id: '1', name: 'John Doe', confirmed: true }];
    component.confirmPresence();

    expect(component.isConfirming).toBeFalse();
    expect(component.displayMessage).toHaveBeenCalledWith('Erro ao confirmar presença!', 'erro');
  });

  it('should display message with correct toast type', () => {
    const toastType = 'confirmado';
    const message = 'Test Message';
    
    component.displayMessage(message, toastType);
    

  });

});
