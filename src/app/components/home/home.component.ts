import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [ProductCardComponent, CommonModule, SearchComponent],
})
export class HomeComponent {
  products: any[] = [];
  filteredProduct: any[] = [];
  productService = inject(ProductService);

  ngOnInit() {
    this.products = this.productService.products;
    this.filteredProduct = this.products;
  }
  onViewProduct(event: any) {
    console.log('onViewProduct', event);
  }

  onSearch(search: string) {
    console.log('home', search);
    if (search) {
      this.filteredProduct = this.products.filter((x) =>
        x.name.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      this.filteredProduct = this.products;
    }
  }
}
