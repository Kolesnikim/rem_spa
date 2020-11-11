import { Component, OnInit } from '@angular/core';
import { GalleryService} from './services/gallery.service';
import { Gallery, GalleryItem } from 'ng-gallery';

@Component({
  selector: 'app-gallery',
  template: `
              <div class="grid-item"
                *ngFor="let item of items; let i = index"
                [lightbox]="i"
                [gallery]="galleryId">
                <img [src]="item.data.thumb">
              </div>
  `,
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
