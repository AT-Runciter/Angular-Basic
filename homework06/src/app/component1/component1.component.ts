import { Component } from '@angular/core';
import { AnyNameNewService } from '../any-name-new-service.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {
  products: string[];
  filterText: string = '';
  filteredProducts: string[] | undefined;


  constructor(private productService: AnyNameNewService) {
    this.products = this.productService.getProducts();
    this.updateFilteredProducts();
  }

  updateFilteredProducts() {
    if (!this.filterText) {
      this.filteredProducts = this.products; // повернення всього списку, якщо фільтр не встановлено
    } else {
      const filter = this.filterText.toLowerCase(); // перетворення фільтру на нижній регістр
      this.filteredProducts = this.products.filter(product => product.toLowerCase().includes(filter));
    }
  }
}
