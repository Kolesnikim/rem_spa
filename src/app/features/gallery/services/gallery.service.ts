import { Injectable } from '@angular/core';
import { GalleryItem } from 'ng-gallery';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../../../core/services/apiService/api.service';
import { GalleryTag } from '../models/tag.model';
import { GalleryImageItem } from '../models/galleryImageItem.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private apiService: ApiService) { }

  /**
   * Получение списка тегов
   * @returns массив объектов GalleryTag
   */
  public getGalleryTags(): Observable<GalleryTag[]> {
    return this.apiService.get('gallery/get-all-photo-tags').pipe(
      map((data: any) => {
        return data as GalleryTag[];
      }));
  }

  /**
   * Получение массива изображений по определенному тегу
   * @param tag название тега по которому запрашиваем список изображений
   * @returns  массив изображений хранящихся под оределенным тегом
   */
  public getGalleryItems(tag: GalleryTag, offset: number, count: number): Observable<GalleryItem[]> {
    const result = this.apiService.get(`gallery/get-photos-by-tags?tag=${tag.id}&offset=${offset}&count=${count}`);
    return result.pipe(map(data => {
      const galleryItems = data.entities;
      return galleryItems.map((item: any) => {
        return new GalleryImageItem(item.url, item.smallUrl);
      });
    }));
  }
}
