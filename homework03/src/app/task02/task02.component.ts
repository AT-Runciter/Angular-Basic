import { Component } from '@angular/core';

@Component({
  selector: 'app-task02',
  templateUrl: './task02.component.html',
  styleUrls: ['./task02.component.css']
})
export class Task02Component {
  public bgColor: string = 'white';

  changeColor(color: string) {
    switch (color) {
      case 'blue':
        this.bgColor = 'blue';
        break;
      case 'red':
        this.bgColor = 'red';
        break;
      case 'green':
        this.bgColor = 'green';
        break;
      case 'gold':
        this.bgColor = 'gold';
        break;
    }
  }
}
