import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnyNameNewService {
  private products: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  getProducts(): string[] {
    return this.products;
  }
}
