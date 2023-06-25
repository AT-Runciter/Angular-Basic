import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-task03',
  templateUrl: './task03.component.html',
  styleUrls: ['./task03.component.css']
})
export class Task03Component implements OnInit {
  currentDate: Date = new Date();
  text: string = 'Hello, world!';
  price: number = 123.45;
  number: number = 678.9;
  percentage: number = 0.75;
  asyncData!: Promise<string>;

  constructor() { }

  ngOnInit(): void {
    this.asyncData = this.getAsyncData();
  }

  getAsyncData(): Promise<string> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Async data loaded!');
      }, 2000);
    });
  }
}
