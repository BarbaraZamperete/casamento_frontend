import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'confirmacao',
    loadComponent: () => import('./pages/confirma-presenca/confirma-presenca.component').then(m => m.ConfirmaPresencaComponent)
  },
  {
    path: 'lista-presentes',
    loadComponent: () => import('./pages/lista-presentes/lista-presentes.component').then(m => m.ListaPresentesComponent)
  },
  {
    path: 'pagamento',
    loadComponent: () => import('./pages/pagamento/pagamento.component').then(m => m.PagamentoComponent)
  }
];
