import { Component, OnInit } from '@angular/core';
import { GalleryItem, GalleryService} from './services/gallery.service';
import {Gallery} from 'angular-gallery';

@Component({
  selector: 'app-gallery',
  template: `
          <ul class="mdc-image-list mdc-image-list--masonry my-masonry-image-list">
            <li *ngFor="let item of galleryItems" class="mdc-image-list__item" (click)="showGallery(item)">
              <img class="mdc-image-list__image" src = '{{item.path}}'>
            </li>
          </ul>
  `,
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  galleryItems: GalleryItem[];

  constructor(private galleryService: GalleryService, private gallery: Gallery) { }

  ngOnInit(): void {
    this.galleryItems = this.galleryService.getGalleryItems();
  }

  getItemIndex(item: GalleryItem): number{
    return this.galleryItems.findIndex(el => el === item);
  }

  showGallery(itemToShow: GalleryItem): void{
    const pathArr = [];
    for (const item of this.galleryItems){
      pathArr.push({path: item.path});
    }
    const index = this.getItemIndex(itemToShow);
    const prop = {
        images: pathArr,
        index
    };
    this.gallery.load(prop);
}

}
