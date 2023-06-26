import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClothingComponent } from './clothing/clothing.component';
import { WomenClothingComponent } from './women-clothing/women-clothing.component';
import { MenClothingComponent } from './men-clothing/men-clothing.component';
import { ChildrensProductsComponent } from './childrens-products/childrens-products.component';
import { WomenDressesComponent } from './women-dresses/women-dresses.component';
import { WomenShoesComponent } from './women-shoes/women-shoes.component';
import { WomenSuitsComponent } from './women-suits/women-suits.component';
import { MenSuitsComponent } from './men-suits/men-suits.component';
import { MenGlovesComponent } from './men-gloves/men-gloves.component';
import { MenShoesComponent } from './men-shoes/men-shoes.component';

@NgModule({
  declarations: [
    AppComponent,
    ClothingComponent,
    WomenClothingComponent,
    MenClothingComponent,
    ChildrensProductsComponent,
    HomeComponent,
    WomenDressesComponent,
    WomenShoesComponent,
    WomenSuitsComponent,
    MenSuitsComponent,
    MenGlovesComponent,
    MenShoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
