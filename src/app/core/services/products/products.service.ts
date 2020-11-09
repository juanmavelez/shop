import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../../../product.model';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<IProduct[]>(environment.API_URL);
  }

  getProduct(id: string) {
    return this.http.get<IProduct>(`${environment.API_URL}/${id}`);
  }

  createProduct(product: IProduct) {
    return this.http.post(`${environment.API_URL}`, product);
  }

  updateProduct(id: string, changes: Partial<IProduct>) {
    return this.http.put(`${environment.API_URL}`, changes);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.API_URL}/${id}`);
  }
}
