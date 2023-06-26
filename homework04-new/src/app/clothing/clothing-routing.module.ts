import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WomenClothingComponent } from 'src/app/women-clothing/women-clothing.component';
import { MenClothingComponent } from 'src/app/men-clothing/men-clothing.component';
import { ClothingComponent } from './clothing.component';

const routes: Routes = [
  { path: '', component: ClothingComponent },
  { path: 'women-clothing', component: WomenClothingComponent },
  { path: 'men-clothing', component: MenClothingComponent }
];

@NgModule({
  declarations: [WomenClothingComponent, MenClothingComponent],
  imports: [CommonModule],
  exports: [WomenClothingComponent, MenClothingComponent]
})
export class ClothingModule {}

