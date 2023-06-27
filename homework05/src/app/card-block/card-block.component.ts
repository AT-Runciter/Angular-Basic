import { Component, Input, ViewChild, AfterViewInit, ElementRef, TemplateRef } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  discountApplied?: boolean;
  color: string;
}

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.css']
})

export class CardBlockComponent implements AfterViewInit {
  @Input() product!: Product;
  @Input() expanded = false;
  @ViewChild('colorTemplate', { static: true }) colorTemplate!: TemplateRef<any>;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.setBlockBackground();
  }

  private setBlockBackground() {
    const color = this.product.color;
    if (color) {
      this.elementRef.nativeElement.style.backgroundColor = color;
    }
  }
  
  collapseCard() {
    this.expanded = false;
  }
  updatePrice() {
  }
}
