import { Injectable } from '@angular/core';
import { GalleryItem } from 'ng-gallery';

import { ApiService } from './apiService/api.service';
import { GalleryTag } from '../models/tag.model';

import { itemsTable } from './gallery.items.stub';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GalleryImageItem } from '../models/item.model';
@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private apiService: ApiService) { }

  /**
   * Получение списка тегов
   * @returns массив объектов GalleryTag
   */
  getGalleryTags(): Observable<GalleryTag[]> {
    return this.apiService.get('/gallery/get-all-photo-tags').pipe(
      map((data: any) => {
        return data as GalleryTag[];
      }));
  }

  /**
   * Получение массива изображений по определенному тегу
   * @param tag название тега по которому запрашиваем список изображений
   * @returns  массив изображений хранящихся под оределенным тегом
   */
  getGalleryItems(tag: GalleryTag, offset: number, count: number): Observable<GalleryItem[]> {
    const result = this.apiService.get(`/gallery/get-photos-by-tags?tag=${tag.id}&offset=${offset}&count=${count}`);
    return result.pipe(map(data => {
      const galleryItems = data.entities;
      return galleryItems.map((item: any) => {
        console.log();
        return new GalleryImageItem(item.url, item.smallUrl);
      });
    }));
  }
}
