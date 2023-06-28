import { Component } from '@angular/core';
import { Task04Service } from '../task04.service';

@Component({
  selector: 'app-task04',
  templateUrl: './task04.component.html',
  styleUrls: ['./task04.component.css']
})
export class Task04Component {
  filteredProducts: any[] = [];
  filterText: string = '';

  constructor(private task04Service: Task04Service) {}

  ngOnInit() {
    this.filterProducts();
  }

  filterProducts(): void {
    this.filteredProducts = this.task04Service.filterProductsByName(this.filterText);
  }

  sortAscending(): void {
    this.task04Service.sortProductsAscending();
    this.filterProducts();
  }

  sortDescending(): void {
    this.task04Service.sortProductsDescending();
    this.filterProducts();
  }

  getMaxPrice(): number {
    return this.task04Service.getMaxPrice();
  }
}
