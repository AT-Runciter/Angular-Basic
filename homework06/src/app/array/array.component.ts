import { Component } from '@angular/core';
import { ArrayService } from '../array.service';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent {
  sortedArray: number[] = [];
  maxNumber: number = 0;

  constructor(private arrayService: ArrayService) {}

  sortArrayAscending(): void {
    this.arrayService.sortAscending();
    this.sortedArray = this.arrayService.getArray();
  }

  sortArrayDescending(): void {
    this.arrayService.sortDescending();
    this.sortedArray = this.arrayService.getArray();
  }

  getMaxNumber(): void {
    this.maxNumber = this.arrayService.getMax();
  }
}
