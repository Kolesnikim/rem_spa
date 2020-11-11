import { Component, OnInit } from '@angular/core';
import { GalleryService} from './services/gallery.service';
import { Gallery, GalleryItem } from 'ng-gallery';

@Component({
  selector: 'app-gallery',
  template: `
    <ul class="mdc-image-list mdc-image-list--masonry my-masonry-image-list">
      <li *ngFor="let item of items,let i = index" class="mdc-image-list__item">
        <div class="grid-item"
          [lightbox]="i"
          [gallery]="galleryId">
          <img [src]="item.data.thumb" class="mdc-image-list__image">
          </div>
      <li>
    </ul> `,
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  items: GalleryItem[] ;
  galleryId = 'my-gallery';

  constructor(private galleryService: GalleryService, public gallery: Gallery) { }

  ngOnInit(): void {
    this.items = this.galleryService.getGalleryItems();

    const galleryRef = this.gallery.ref(this.galleryId);
    galleryRef.load(this.items);
  }
}
