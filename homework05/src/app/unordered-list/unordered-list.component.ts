/*import { Component } from '@angular/core';

@Component({
  selector: 'app-unordered-list',
  templateUrl: './unordered-list.component.html',
  styleUrls: ['./unordered-list.component.css']
})
export class UnorderedListComponent {

}*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-unordered-list',
  templateUrl: './unordered-list.component.html',
  styleUrls: ['./unordered-list.component.css']
})
export class UnorderedListComponent {
  items: string[] = ['item1', 'item2', 'item3'];

  constructor() {}
}

//тут масив рядків, який передається до дочірнього компонента list-item
