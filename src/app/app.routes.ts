import { Routes } from '@angular/router';
import { PageNavigationLayoutComponent } from './components/page-navigation-layout/page-navigation-layout.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        // A Home posiciona sua própria navbar abaixo do hero.
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
      },
      {
        // As demais páginas compartilham a navbar no topo.
        path: '',
        component: PageNavigationLayoutComponent,
        children: [
          {
            path: 'casamento',
            loadComponent: () => import('./pages/em-breve/em-breve.component').then(m => m.EmBreveComponent)
          },
          {
            path: 'galeria',
            loadComponent: () => import('./pages/em-breve/em-breve.component').then(m => m.EmBreveComponent)
          },
          {
            path: 'lista-presentes',
            loadComponent: () => import('./pages/lista-presentes/lista-presentes.component').then(m => m.ListaPresentesComponent)
          },
          {
            path: 'confirmacao',
            loadComponent: () => import('./pages/confirma-presenca/confirma-presenca.component').then(m => m.ConfirmaPresencaComponent)
          },
          {
            path: 'nossa-historia',
            loadComponent: () => import('./pages/nossa-historia/nossa-historia.component').then(m => m.NossaHistoriaComponent)
          },
          {
            path: 'regras',
            loadComponent: () => import('./pages/regras/regras.component').then(m => m.RegrasComponent)
          }
        ]
      }
    ]
  }
];
