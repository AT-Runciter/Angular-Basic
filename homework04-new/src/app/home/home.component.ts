import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  images = [
    'assets/nikolai-1.png',
    'assets/nikolai-2.png',
    'assets/nikolai-3.png'
  ];
  currentImageIndex = 0;

  prevImage() {
    if (this.currentImageIndex === 0) {
      this.currentImageIndex = this.images.length - 1;
    } else {
      this.currentImageIndex--;
    }
    this.updateImage();
  }
  
  nextImage() {
    if (this.currentImageIndex === this.images.length - 1) {
      this.currentImageIndex = 0;
    } else {
      this.currentImageIndex++;
    }
    this.updateImage();
  }
  
  updateImage() {
    const imgElement = document.getElementById('myImage') as HTMLImageElement; // получение элемент img
    imgElement.src = this.images[this.currentImageIndex]; // изменение пути к изображению
  }
  
  ngOnInit() {
    // добавление обработчика события на нажатие клавиш в методе ngOnInit()
    document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') { // если нажата клавиша "влево"
        this.prevImage(); // переключение на предыдущее изображение
      } else if (event.key === 'ArrowRight') { // если нажата клавиша "вправо"
        this.nextImage(); // переключение на следующее изображение
      }
    });
  }
}

