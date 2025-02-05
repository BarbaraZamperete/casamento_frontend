// frontend/src/app/components/pagamento/pagamento.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagamentoComponent } from './pagamento.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ApiService } from '../../services/api.service';

describe('PagamentoComponent', () => {
  let component: PagamentoComponent;
  let fixture: ComponentFixture<PagamentoComponent>;
  let apiService: jasmine.SpyObj<ApiService>;

  beforeEach(async () => {
    const apiServiceSpy = jasmine.createSpyObj('ApiService', ['getQrcode', 'gerarCompra', 'getLojas']);

    await TestBed.configureTestingModule({
      imports: [PagamentoComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ id: '1', nome: 'Produto Teste', valor: 100, convidadoId: '123', link_compra: 'http://example.com' })
          }
        },
        { provide: ApiService, useValue: apiServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PagamentoComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;

    // Mock do retorno do método getQrcode
    // apiService.getQrcode.and.returnValue(of({ qrCodeUrl: 'http://example.com/qrcode.png' }));

    fixture.detectChanges(); // Detecta mudanças para garantir que o template seja renderizado
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy(); // Verifica se o componente foi criado
  });

  // it('deve chamar confirmarPagamento e exibir o modal', () => {
  //   // Mock do modal
  //   const modalElement = document.createElement('div');
  //   modalElement.id = 'modalAgradecimento';
  //   document.body.appendChild(modalElement);

  //   // Chama o método confirmarPagamento
  //   component.confirmarPagamento();

  //   // Verifica se o modal foi exibido
  //   const bootstrapModal = (window as any).bootstrap.Modal;
  //   expect(bootstrapModal).toHaveBeenCalledWith(modalElement);
  //   expect(bootstrapModal().show).toHaveBeenCalled();

  //   // Limpeza
  //   document.body.removeChild(modalElement);(
  // });

  // it('deve chamar pegarQrcode ao inicializar', () => {
  //   spyOn(component, 'pegarQrcode').and.callThrough(); // Espia o método pegarQrcode
  //   component.ngOnInit(); // Chama o método ngOnInit
  //   expect(component.pegarQrcode).toHaveBeenCalled(); // Verifica se pegarQrcode foi chamado
  // });

  // it('deve chamar pegarLojas ao inicializar', () => {
  //   spyOn(component, 'pegarLojas').and.callThrough(); // Espia o método pegarLojas
  //   component.ngOnInit(); // Chama o método ngOnInit(
  //   expect(component.pegarLojas).toHaveBeenCalled(); // Verifica se pegarLojas foi chamado
  // });
});