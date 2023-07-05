import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModeratorComponent } from './moderator/moderator.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, ModeratorComponent, ProductListComponent, ContactComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



