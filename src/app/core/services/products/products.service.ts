import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '@core/product.model';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(environment.API_URL);
  }

  getProduct(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${environment.API_URL}/${id}`);
  }

  createProduct(product: IProduct): Observable<object> {
    return this.http.post(`${environment.API_URL}`, product);
  }

  updateProduct(id: string, changes: Partial<IProduct>): Observable<any> {
    return this.http.put(`${environment.API_URL}/${id}`, changes);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${environment.API_URL}/${id}`);
  }
}
