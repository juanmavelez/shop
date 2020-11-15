import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

import { finalize } from 'rxjs/operators';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from '@core/services/products/products.service';
import { MyValidators } from '@utils/customValidators';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
})
export class FormProductComponent implements OnInit {
  form: FormGroup;
  image$: Observable<string>;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private angularFireStorage: AngularFireStorage
  ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  private buildForm(): void {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required, Validators.min]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }

  saveProduct(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productsService.createProduct(product).subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['./admin/products']);
      });
    }
    console.log(this.form.value);
  }

  get priceField(): AbstractControl {
    return this.form.get('price');
  }

  uploadFile(event): void {
    const file = event.target.files[0];
    console.log(event.type);
    const dir = 'images';
    const fileRef = this.angularFireStorage.ref(dir);
    const task = this.angularFireStorage.upload(dir, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.image$ = fileRef.getDownloadURL();
          this.image$.subscribe((url) => {
            this.form.get('image').setValue(url);
          });
        })
      )
      .subscribe();
  }
}
