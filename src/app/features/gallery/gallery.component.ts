import { Component, OnInit } from '@angular/core';
import { GalleryService } from './services/gallery.service';
import { Gallery, GalleryItem } from 'ng-gallery';

@Component({
  selector: 'app-gallery',
  template: `

  <div class ='gallery_container'>
    <div class = 'gallery_board'>
    <nav class = 'gallery_nav'>
      <ul class = 'nav'>
        <li *ngFor="let item of menuItems" class='nav_item'>
          <a routerLink={{item.path}} href="{{item.path}}" class='nav_link'>{{item.name}}</a>
        </li>
      </ul>
    </nav>
    </div>
    <div class='gallery_viewport'
    infiniteScroll
  [infiniteScrollDistance]="1"
  [infiniteScrollThrottle]="300"
  (scrolled)="onScroll()"
  [scrollWindow]="false">
    <ul class="mdc-image-list mdc-image-list--masonry my-masonry-image-list">
      <li *ngFor="let item of items,let i = index" class="mdc-image-list__item">
        <div class="grid-item" [lightbox]="i" [gallery]="galleryId">
          <img [src]="item.data.thumb" class="mdc-image-list__image">
          <p>{{i}}</p>
        </div>
      <li>
    </ul>
    </div>
</div>`,
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(private galleryService: GalleryService, public gallery: Gallery) { }
  items: GalleryItem[];
  galleryId = 'my-gallery';

  menuItems = [
    { name: '#teg1', path: '#teg1' },
    { name: '#teg2', path: 'teg1' },
    { name: '#teg3', path: 'teg1' }
  ];

  ngOnInit(): void {
    this.items = this.galleryService.getGalleryItems();

    const galleryRef = this.gallery.ref(this.galleryId);
    galleryRef.load(this.items);
  }

  onScroll(): void {
    console.log('Scrolled!!');
    this.items.push(...this.items.slice(0, 100));
    console.log('items size ' + this.items.length);
  }
}
