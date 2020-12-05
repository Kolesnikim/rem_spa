import { Injectable } from '@angular/core';
import { GalleryItem } from 'ng-gallery';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../../../core/services/apiService/api.service';
import { GalleryTag } from '../models/interfaces/galleryTag.interface';
import { GalleryImageItem } from '../models/galleryImageItem.model';
import { DatabaseImages } from '../models/interfaces/databaseImages.interface';
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
    return this.apiService.get<GalleryTag[]>('gallery/get-all-photo-tags');
  }

  /**
   * Получение массива изображений по определенному тегу
   * @param tag название тега по которому запрашиваем список изображений
   * @returns  массив изображений хранящихся под оределенным тегом
   */
  public getGalleryItems(tag: GalleryTag, offset: number, count: number): Observable<GalleryItem[]> {
    const result = this.apiService.get<DatabaseImages>(`gallery/get-photos-by-tags?tag=${tag.id}&offset=${offset}&count=${count}`);
    return result.pipe(map(data => {
      const galleryItems = data.entities;
      return galleryItems.map((item) => {
        return new GalleryImageItem(item.url, item.smallUrl);
      });
    }));
  }
}
