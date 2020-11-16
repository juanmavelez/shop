import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '@core/product.model';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { handleHttpErrorResponse } from '@utils/handleHttpResponseError';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>(environment.API_URL)
      .pipe(catchError(handleHttpErrorResponse));
  }

  getProduct(id: string): Observable<IProduct> {
    return this.http
      .get<IProduct>(`${environment.API_URL}/${id}`)
      .pipe(catchError(handleHttpErrorResponse));
  }

  createProduct(product: IProduct): Observable<object> {
    return this.http
      .post(`${environment.API_URL}`, product)
      .pipe(catchError(handleHttpErrorResponse));
  }

  updateProduct(id: string, changes: Partial<IProduct>): Observable<any> {
    return this.http
      .put(`${environment.API_URL}/${id}`, changes)
      .pipe(catchError(handleHttpErrorResponse));
  }

  deleteProduct(id: string): Observable<any> {
    return this.http
      .delete(`${environment.API_URL}/${id}`)
      .pipe(catchError(handleHttpErrorResponse));
  }
}
