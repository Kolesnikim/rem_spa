import { Injectable } from '@angular/core';
import { GalleryItem } from 'ng-gallery';

import {itemsTable} from './gallery.items.stub';
@Injectable({
  providedIn: 'root'
})
export class GalleryService {
   constructor() { }

  /**
   * Получение списка тегов
   * @returns массив строк с названиями тегов
   */
  getGalleryTags(): string[]{
    return ['#tag1' , '#tag2', '#tag3'];
  }

  /**
   * Получение массива изображений по определенному тегу
   * @param tag название тега по которому запрашиваем список изображений
   * @returns  массив изображений хранящихся под оределенным тегом
   */
  getGalleryItems(tag: string): GalleryItem[] {

    let items: GalleryItem[] = itemsTable[tag];

    for (let i = 0; i < 5; i++){
      items = items.concat(items);
    }
    return items;
  }
}
