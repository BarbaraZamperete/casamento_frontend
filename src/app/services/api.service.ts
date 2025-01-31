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
    return this.http.get(`${this.apiUrl}/convidados/buscar-por-convite/`, {
      params: { numero_convite: numeroConvite }
    });
  }

  buscarPorNome(nome: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/convidados/buscar-por-nome/`, {
      params: { nome: nome }
    });
  }


  getPresentes(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/presentes/`).pipe(
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
    return this.http.post(`${this.apiUrl}/convidados/confirmar-presenca/`, {
      convidados: convidados
    });
  }

  // getCompras(): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/compras/`);
  // }
}
