import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from './../../products.service';
import { IProduct } from '../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: IProduct;

  constructor(
    private route: ActivatedRoute,
    private productsServices: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.product = this.productsServices.getProducts(id);
    });
  }
}
