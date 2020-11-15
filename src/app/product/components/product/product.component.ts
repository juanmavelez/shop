import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CartService } from '@core/services/cart/cart.service';
import { IProduct } from '@core/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  today = new Date();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addCart(): void {
    this.cartService.addCart(this.product);
  }
}
