import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductRoutingModule } from './product-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ProductComponent, ProductsComponent, ProductDetailComponent],
  imports: [ProductRoutingModule, CommonModule, MaterialModule],
})
export class ProductModule {}
