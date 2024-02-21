import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Product } from '../../types/product';
import { ProductService } from '../../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [MatButtonModule, FormsModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
})
export class EditProductComponent {
  formBuilder = inject(FormBuilder);
  productService = inject(ProductService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  productForm: FormGroup = this.formBuilder.group({
    id: [''],
    name: [''],
    brand: [''],
    image: [''],
    currentPrice: [''],
    standardPrice: [''],
    discount: [''],
  });
  ngOnInit() {
    let productId = this.activatedRoute.snapshot.params['id'];
    this.productService.getProductById(productId).subscribe((result) => {
      this.productForm.patchValue(result);
    });
  }
  editProduct() {
    console.log('teste do edit', this.productForm.value);
    this.productService
      .updateProduct(this.productForm.value)
      .subscribe((result) => {
        alert('producto atualizado');
        this.router.navigateByUrl('/');
      });
  }
}
