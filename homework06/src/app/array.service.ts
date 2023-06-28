import { Injectable } from '@angular/core';

@Injectable()
export class ArrayService {
  private array: number[] = [5, 2, 8, 1, 7]; // Ініціалізуємо масив з числами

  getArray(): number[] {
    return this.array;
  }

  sortAscending(): void {
    this.array.sort((a, b) => a - b); // сортування за зростанням
  }

  sortDescending(): void {
    this.array.sort((a, b) => b - a); // сортування за спаданням
  }

  getMax(): number {
    return Math.max(...this.array); // повернення максимального значення масиву
  }
}

