import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./components/dashboard/dashboard.component'),
    children: [
      {
        path: 'trending',
        loadComponent: () => import('./pages/trending/trending.component')
      },
      {
        path: 'search',
        loadComponent: () => import('./pages/search/search.component')
      },
      {
        path: 'history/:query',
        loadComponent: () => import('./pages/history/history.component')
      },
      { path: '**', redirectTo: 'trending' }
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];
