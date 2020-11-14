import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './guards/admin/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((module) => module.HomeModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./product/product.module').then(
            (module) => module.ProductModule
          ),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./contact/contact.module').then(
            (module) => module.ContactModule
          ),
      },
      {
        path: 'order',
        loadChildren: () =>
          import('./order/order.module').then((module) => module.OrderModule),
      },
      {
        path: 'demo',
        loadChildren: () =>
          import('./demo/demo.module').then((module) => module.DemoModule),
      },
    ],
  },

  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () =>
      import('./admin/admin.module').then((module) => module.AdminModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((module) => module.AuthModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
