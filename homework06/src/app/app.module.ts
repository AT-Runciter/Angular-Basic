import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AnyNameNewService } from './any-name-new-service.service';
import { Component1Component } from './component1/component1.component';

import { ArrayService } from './array.service';
import { ArrayComponent } from './array/array.component';

import { Task04Component } from './task04/task04.component';
import { Task04Service } from './task04.service';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    ArrayComponent,
    Task04Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AnyNameNewService, ArrayService, Task04Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
