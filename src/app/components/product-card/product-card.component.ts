import { CommonModule, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../types/product';
import { RupePipe } from '../../rupe.pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatButtonModule,
    UpperCasePipe,
    LowerCasePipe,
    RupePipe,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  // @Input() product: any;
  @Input() product!: Product;
  @Output() viewProduct = new EventEmitter<number>();

  view() {
    console.log('visualizar');
    this.viewProduct.emit(this.product.id);
  }
}
