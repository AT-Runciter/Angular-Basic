
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Album } from './album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) { }

  getAlbums() {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(data => data.map(albumData => new Album(albumData.id, albumData.title)))
    );
  }
}


