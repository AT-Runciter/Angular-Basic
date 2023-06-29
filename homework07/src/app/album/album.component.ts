import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album',
  template: `
    <h2>Albums</h2>
    <ul>
      <li *ngFor="let album of albums">{{ album.title }}</li>
    </ul>
  `,
  providers: [AlbumService]
})
export class AlbumComponent implements OnInit {
  albums!: any[];

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.albumService.getAlbums().subscribe((data: any[]) => {
      this.albums = data;
      console.log(this.albums);
    });
  }
}
