import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { environment } from '../../environments/environment';
import { Convidado } from '../interfaces/convidado.interface';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  const apiUrl = environment.apiUrl; // O mesmo valor de apiUrl do serviço

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });

    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();  // Verifica se não há requisições pendentes
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve chamar buscarPorConvite e retornar os dados corretos', () => {
    const numeroConvite = '123456';
    const mockResponse: Convidado = { id: '1', nome: 'Convidado Teste', presenca_confirmada: true, email: 'teste@teste.com', telefone: '1234567890' };

    service.buscarPorConvite(numeroConvite).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(req => 
      req.method === 'GET' && 
      req.url === `${apiUrl}/api/convidados/buscar-por-convite/` && 
      req.params.get('numero_convite') === numeroConvite
    );
    expect(req.request.method).toBe('GET');

    req.flush(mockResponse); // Simula a resposta da API
  });

  it('deve chamar buscarPorNome e retornar os dados corretos', () => {
    const nome = 'Convidado Teste';
    const mockResponse: Convidado[] = [{ id: '1', nome: 'Convidado Teste', presenca_confirmada: true, email: 'teste@teste.com', telefone: '1234567890' }];

    service.buscarPorNome(nome).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(req => 
      req.method === 'GET' && 
      req.url === `${apiUrl}/api/convidados/buscar-por-nome/` && 
      req.params.get('nome') === nome
    );
    expect(req.request.method).toBe('GET');

    req.flush(mockResponse); // Simula a resposta da API
  });

  it('deve chamar getPresentes e retornar os dados com a URL da imagem absoluta', () => {
    const mockPresentes = [
      { id: 1, nome: 'Presente Teste', image_path: '/path/to/image.jpg' }
    ];

    service.getPresentes().subscribe(presentes => {
      expect(presentes[0].image_path).toBe(`${apiUrl}/path/to/image.jpg`);
    });

    const req = httpMock.expectOne(`${apiUrl}/api/presentes/`);
    expect(req.request.method).toBe('GET');
    req.flush(mockPresentes); // Simula a resposta da API
  });

  it('deve chamar confirmarPresenca e enviar os dados corretos', () => {
    const convidados = [{ id: 1, presenca_confirmada: true }];
    const mockResponse = { success: true };

    service.confirmarPresenca(convidados).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${apiUrl}/api/convidados/confirmar-presenca/`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual({ convidados });

    req.flush(mockResponse); // Simula a resposta da API
  });

  it('deve chamar gerarCompra e retornar o URL do QR Code', () => {
    const id = '1';
    const valor = 100;
    const convidadoId = '2';
    const mockResponse = { qrCodeUrl: '/path/to/qr-code.png' };

    service.gerarCompra(id, valor, convidadoId).subscribe(response => {
      expect(response).toBe(`${apiUrl}/path/to/qr-code.png`);
    });

    const req = httpMock.expectOne(`${apiUrl}/api/compras/gerar-compra/`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ presenteId: id, valor: valor, convidadoId: convidadoId });

    req.flush(mockResponse); // Simula a resposta da API
  });

  it('deve chamar getLojas e retornar os dados corretos', () => {
    const id = '1';
    const mockResponse = { lojas: ['Loja 1', 'Loja 2'] };

    service.getLojas(id).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${apiUrl}/api/presentes/${id}/lojas/`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse); // Simula a resposta da API
  });
});
