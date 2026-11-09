import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'casamento',
    loadComponent: () => import('./pages/em-breve/em-breve.component').then(m => m.EmBreveComponent)
  },
  {
    path: 'galeria',
    loadComponent: () => import('./pages/em-breve/em-breve.component').then(m => m.EmBreveComponent)
  },
  // {
  //   path: 'lista-presentes',
  //   loadComponent: () => import('./pages/em-breve/em-breve.component').then(m => m.EmBreveComponent)
  // },
  {
    path: 'lista-presentes',
    loadComponent: () => import('./pages/lista-presentes/lista-presentes.component').then(m => m.ListaPresentesComponent) 
  },
  // {
  //   path: 'confirmacao',
  //   loadComponent: () => import('./pages/em-breve/em-breve.component').then(m => m.EmBreveComponent)
  // },
  {
    path: 'confirmacao',
    loadComponent: () => import('./pages/confirma-presenca/confirma-presenca.component').then(m => m.ConfirmaPresencaComponent)
  },
  // {
  //   path: 'pagamento',
  //   loadComponent: () => import('./pages/pagamento/pagamento.component').then(m => m.PagamentoComponent)
  // },
  {
    path: 'regras',
    loadComponent: () => import('./pages/regras/regras.component').then(m => m.RegrasComponent)
  }
];
