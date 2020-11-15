import { Injectable } from '@angular/core';
import { Gallery, GalleryItem } from 'ng-gallery';

import {itemsTable} from './gallery.items.stub';
@Injectable({
  providedIn: 'root'
})
export class GalleryService {
   constructor() { }

  getGalleryTags(): string[]{
    return ['#tag1' , '#tag2', '#tag3'];
  }

  getGalleryItems(tag: string): GalleryItem[] {

    let items: GalleryItem[] = itemsTable[tag];

    for (let i = 0; i < 5; i++){
      items = items.concat(items);
    }
    return items;
  }
}
