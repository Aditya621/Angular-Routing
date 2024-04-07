import { Routes } from '@angular/router';
import { CartsComponent } from './carts/carts.component';
import { RouterAppComponent } from './router-app/router-app.component';

export const routes: Routes = [
  { path: 'route', component: RouterAppComponent },
  { path: '', redirectTo: '/route', pathMatch: 'full' },
  {
    path: 'orders',
    loadComponent: () =>
      import('./orders/orders.component').then((e) => e.OrdersComponent),
  }, // Lazy Loading
  { path: 'carts', component: CartsComponent },
];
