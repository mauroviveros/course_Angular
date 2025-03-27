import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component'),
    children: [
      {
        path: 'trending',
        loadComponent: () => import('./pages/trending/trending.component')
      },
      {
        path: 'search',
        loadComponent: () => import('./pages/search/search.component')
      },
      { path: '**', redirectTo: 'trending' }
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];
