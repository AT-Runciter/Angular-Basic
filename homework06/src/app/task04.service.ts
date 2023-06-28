import { Injectable } from '@angular/core';

@Injectable()
export class Task04Service {
  products = [
    { id: 1, name: 'product 1', price: 110, description: 'product1 text description' },
    { id: 2, name: 'product 2', price: 120, description: 'product2 text description' },
    { id: 3, name: 'product 3', price: 130, description: 'product3 text description' }
  ];

  filterProductsByName(name: string): any[] {
    return this.products.filter(product => product.name.toLowerCase().includes(name.toLowerCase()));
  }

  sortProductsAscending(): void {
    this.products.sort((a, b) => a.price - b.price);
  }

  sortProductsDescending(): void {
    this.products.sort((a, b) => b.price - a.price);
  }

  getMaxPrice(): number {
    return Math.max(...this.products.map(product => product.price));
  }
}
