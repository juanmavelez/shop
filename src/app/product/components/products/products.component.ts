import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../product.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.fetchProducts();
  }

  clickProduct(id: number): void {
    console.log('product');
    console.log(id);
  }

  fetchProducts() {
    this.productsService
      .getAllProducts()
      .subscribe((products) => (this.products = products));
  }
}
