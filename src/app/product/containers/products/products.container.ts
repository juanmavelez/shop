import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../product.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class ProductsContainer implements OnInit {
  products: IProduct[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  clickProduct(id: number): void {
    console.log('product');
    console.log(id);
  }

  fetchProducts(): void {
    this.productsService
      .getAllProducts()
      .subscribe((products) => (this.products = products));
  }
}
