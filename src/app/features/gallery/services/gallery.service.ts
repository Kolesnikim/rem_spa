import { Injectable } from '@angular/core';
import { GalleryItem } from 'ng-gallery';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../../../core/services/apiService/api.service';
import { IGalleryTag } from '../models/interfaces/IGalleryTag';
import { GalleryImageItem } from '../models/galleryImageItem.model';
import { IDatabaseImage} from '../models/interfaces/IDatabaseImage';
import { IDatabaseImages } from '../models/interfaces/IDatabaseImages';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private apiService: ApiService) { }

  /**
   * Получение списка тегов
   * @returns массив объектов GalleryTag
   */
  public getGalleryTags(): Observable<IGalleryTag[]> {
    return this.apiService.get('gallery/get-all-photo-tags').pipe(
      map((data: any) => {
        return data as IGalleryTag[];
      }));
  }

  /**
   * Получение массива изображений по определенному тегу
   * @param tag название тега по которому запрашиваем список изображений
   * @returns  массив изображений хранящихся под оределенным тегом
   */
  public getGalleryItems(tag: IGalleryTag, offset: number, count: number): Observable<GalleryItem[]> {
    const result = this.apiService.get<IDatabaseImages>(`gallery/get-photos-by-tags?tag=${tag.id}&offset=${offset}&count=${count}`);
    return result.pipe(map(data => {
      const galleryItems = data.entities;
      return galleryItems.map((item: any) => {
        return new GalleryImageItem(item.url, item.smallUrl);
      });
    }));
  }
}
