import { Component, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { CardBlockComponent, Product } from '../card-block/card-block.component';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements AfterViewInit {
  products: Product[] = [
    { id: 1, name: 'product 1', price: 110, description: 'product1 text description', color: 'red'},
    { id: 2, name: 'product 2', price: 120, description: 'product2 text description', color: 'green'},
    { id: 3, name: 'product 3', price: 130, description: 'product3 text description', color: 'purple'},
  ];

  expandedProduct: Product | null = null;

  @ViewChild('cardBlock', { static: true }) cardBlock!: CardBlockComponent;
  @ViewChildren(CardBlockComponent) cardBlocks!: QueryList<CardBlockComponent>;

  discountProduct(product: Product) {
    if (product.discountApplied) {
      console.log("Discount already applied to this product.");
      return;
    }
    product.price = Math.round(product.price * 0.85);
    product.discountApplied = true;
    this.cardBlocks.forEach(cardBlock => cardBlock.updatePrice());
  }
  
  expandCard(product: Product) {
    this.expandedProduct = product;
  }

  ngAfterViewInit() {
    console.log(this.cardBlocks.toArray());
  }
}
