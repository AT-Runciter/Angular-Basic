/*import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: any[] = [
    { name: 'Product 1', description: 'Description 1', color: 'red' },
    { name: 'Product 2', description: 'Description 2', color: 'blue' },
    { name: 'Product 3', description: 'Description 3', color: 'red' },
    // Додайте інші об'єкти продуктів за необхідністю
  ];

  filteredProducts!: any[];

  filterProductsByColor(color: string) {
    this.filteredProducts = this.products.filter(product => product.color === color);
  }
}
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: any[] = [
    { name: 'Product 1', description: 'Description 1', color: 'red' },
    { name: 'Product 2', description: 'Description 2', color: 'purple'},
    { name: 'Product 3', description: 'Description 3', color: 'red' },
    { name: 'Product 4', description: 'Description 4', color: 'green'},
    { name: 'Product 5', description: 'Description 5', color: 'green'},
    { name: 'Product 6', description: 'Description 6', color: 'red' },
    
  ];

  selectedColor: string | null = null;
}
