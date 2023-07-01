import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { Task01Component } from './task01/task01.component';
import { Task02Component } from './task02/task02.component';
import { Task04Component } from './task04/task04.component';
import { Task03Component } from './task03/task03.component';

@NgModule({
  declarations: [
    AppComponent,
    Task01Component,
    Task02Component,
    Task04Component,
    Task03Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
