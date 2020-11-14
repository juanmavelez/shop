import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsContainer } from './containers/products/products.container';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductRoutingModule } from './product-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ProductComponent, ProductsContainer, ProductDetailComponent],
  imports: [ProductRoutingModule, CommonModule, MaterialModule],
})
export class ProductModule {}
