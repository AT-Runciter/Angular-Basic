import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WomenClothingComponent } from 'src/app/women-clothing/women-clothing.component';
import { MenClothingComponent } from 'src/app/men-clothing/men-clothing.component';

@NgModule({
  declarations: [WomenClothingComponent, MenClothingComponent],
  imports: [CommonModule],
  exports: [WomenClothingComponent, MenClothingComponent]
})
export class ClothingModule {}
