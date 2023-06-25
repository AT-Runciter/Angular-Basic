import { Component } from '@angular/core';

@Component({
  selector: 'app-task04',
  templateUrl: './task04.component.html',
  styleUrls: ['./task04.component.css']
})
export class Task04Component {
  buttons = [1, 2, 3];

  deleteButton(button: number) {
    const index = this.buttons.indexOf(button);
    if (index >= 0) {
      this.buttons.splice(index, 1);
    }
  }
}
