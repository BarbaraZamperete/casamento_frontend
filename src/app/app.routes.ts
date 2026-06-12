import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'galeria',
    loadComponent: () => import('./pages/galeria/galeria.component').then(m => m.GaleriaComponent)
  },
  // {
  //   path: 'lista-presentes',
  //   loadComponent: () => import('./pages/lista-presentes/lista-presentes.component').then(m => m.ListaPresentesComponent)
  // },
  // {
  //   path: 'pagamento',
  //   loadComponent: () => import('./pages/pagamento/pagamento.component').then(m => m.PagamentoComponent)
  // },
  {
    path: 'regras',
    loadComponent: () => import('./pages/regras/regras.component').then(m => m.RegrasComponent)
  }
];
