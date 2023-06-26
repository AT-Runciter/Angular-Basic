import { Component } from '@angular/core';

@Component({
  selector: 'app-clothing',
  template: `
    <h2>Clothing</h2>
    <nav>
      <a routerLink="./women-clothing">Women Clothing</a>
      <a routerLink="./men-clothing">Men Clothing</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent { }
