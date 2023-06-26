import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClothingComponent } from './clothing/clothing.component';
import { WomenClothingComponent } from './women-clothing/women-clothing.component';
import { MenClothingComponent } from './men-clothing/men-clothing.component';
import { ChildrensProductsComponent } from './childrens-products/childrens-products.component';
import { WomenDressesComponent } from './women-dresses/women-dresses.component';
import { WomenShoesComponent } from './women-shoes/women-shoes.component';
import { WomenSuitsComponent } from './women-suits/women-suits.component';
import { MenGlovesComponent } from './men-gloves/men-gloves.component';
import { MenShoesComponent } from './men-shoes/men-shoes.component';
import { MenSuitsComponent } from './men-suits/men-suits.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'clothing',
    component: ClothingComponent,
    children: [
      {
        path: 'women-clothing',
        component: WomenClothingComponent,
        children: [
          { path: 'women-dresses', component: WomenDressesComponent },
          { path: 'women-shoes', component: WomenShoesComponent },
          { path: 'women-suits', component: WomenSuitsComponent },
        ],
      },
      {
        path: 'men-clothing',
        component: MenClothingComponent,
        children: [
          { path: 'men-gloves', component: MenGlovesComponent },
          { path: 'men-shoes', component: MenShoesComponent },
          { path: 'men-suits', component: MenSuitsComponent },
        ],
      },
    ],
  },
  { path: 'childrens-products', component: ChildrensProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }