import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',

})
export class ApiService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  buscarPorConvite(numeroConvite: string): Observable<any> {
    console.log(numeroConvite)
    return this.http.get(`${this.apiUrl}/api/convidados/buscar-por-convite/`, {
      params: { numero_convite: numeroConvite }
    });
  }

  buscarPorNome(nome: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/convidados/buscar-por-nome/`, {
      params: { nome: nome }
    });
  }


  getPresentes(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/api/presentes/`).pipe(
      map(presentes => {
        // Garantir que as URLs das imagens são absolutas
        return presentes.map((presente: any) => ({
          ...presente,
          image_path: `${this.apiUrl}${presente.image_path}`
        }));
      })
    );
  }

  confirmarPresenca(convidados: { id: number, presenca_confirmada: boolean }[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/convidados/confirmar-presenca/`, {
      convidados: convidados
    });
  }

  gerarCompra(id: string, valor: number, convidadoId: string) {
    const data = {
      presenteId: id,
      valor: valor,
      convidadoId: convidadoId
    }
    return this.http.post(`${this.apiUrl}/api/compras/gerar-compra/`, data).pipe(
      map((response: any) => {
        return `${this.apiUrl}/${response.qrCodeUrl}`
      })
    );
  }

  getLojas(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/presentes/${id}/lojas/`).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

}
