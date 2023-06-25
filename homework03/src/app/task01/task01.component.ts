import { Component } from '@angular/core';

@Component({
  selector: 'app-task01',
  templateUrl: './task01.component.html',
  styleUrls: ['./task01.component.css']
})
export class Task01Component {
  myArray = ['перший рядок', 'другий рядок', 'третій рядок'];
  lastClickedItem: string = '';

  displayContent(item: string) {
    this.lastClickedItem = item;
  }
}
