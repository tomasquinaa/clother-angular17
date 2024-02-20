import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [ProductCardComponent, CommonModule, SearchComponent],
})
export class HomeComponent {
  products = [
    {
      id: '1',
      brand: 'HereNow',
      image:
        'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/9/h/b/xxl-0z-alnassr4th-r7-blksh-yutu-original-imagx4fekun6yzkz.jpeg?q=70',
      currentPrice: '150',
      standardPrice: '300',
      discount: '50',
      name: 'Men Checkered T-Shirt',
    },
    {
      id: '2',
      brand: 'Men Solid Polo ',
      image:
        'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/9/1/u/xxl-pa74-iplgujarat-jer-hardikpandya-33-teky-original-imagvz3hfyshk7hh.jpeg?q=70',
      currentPrice: '350',
      standardPrice: '500',
      discount: '50',
      name: 'Men Pure Cotton T-Shirt',
    },
    {
      id: '3',
      brand: 'Men Solid V Neck',
      image:
        'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/r/y/m/-original-imagxusjcrng8prd.jpeg?q=70',
      currentPrice: '750',
      standardPrice: '600',
      discount: '50',
      name: 'Disney Comfort',
    },
  ];

  filteredProduct: any[] = [];
  ngOnInit() {
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
