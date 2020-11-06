import { Component, NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  PreloadingStrategy,
  PreloadAllModules,
} from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product/components/product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';

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
    ],
  },
  {
    path: 'demo',
    loadChildren: () =>
      import('./demo/demo.module').then((module) => module.DemoModule),
  },

  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
