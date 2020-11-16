import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@core/services/products/products.service';
import { IProduct } from '@core/product.model';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: IProduct[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productsService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }

  deleteProduct(id: string): void {
    this.productsService.deleteProduct(id).subscribe((rta) => {
      this.fetchProducts();
    });
  }
}
