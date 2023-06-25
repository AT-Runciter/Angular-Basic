import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  imagePath = 'assets/nikolai.png';
  ngOnInit() {
    // тут может быть логика для инициализации компонента
  }
}
