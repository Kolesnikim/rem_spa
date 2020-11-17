import { Component, OnInit } from '@angular/core';
import { GalleryService } from './services/gallery.service';
import { Gallery, GalleryItem } from 'ng-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html' ,
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  galleryTags: string[];
  displayedItems: GalleryItem[];
  clickableItems: GalleryItem[];
  allItems: GalleryItem[];
  maxClickableItems = 100;
  itemsPerScroll = 100;
  galleryId = 'my-gallery';
  firstClickableIndex = 0;
  lastItemIndex: number = this.itemsPerScroll;

  constructor(private galleryService: GalleryService, public gallery: Gallery) { }

  ngOnInit(): void {
    this.galleryTags = this.galleryService.getGalleryTags();
    if (this.galleryTags.length > 0){
     this.getItems(this.galleryTags[0]);
    }
  }

  onScroll(): void {
    this.lastItemIndex += this.itemsPerScroll;
    if (this.lastItemIndex > this.allItems.length){
      this.lastItemIndex = this.allItems.length;
    }
    this.displayedItems = this.allItems.slice(0, this.lastItemIndex);
  }

  onImageClick(id: number): void {
    this.firstClickableIndex = id - this.maxClickableItems / 2;
    if (this.firstClickableIndex < 0){
      this.firstClickableIndex = 0;
    }

    const galleryRef = this.gallery.ref(this.galleryId);
    this.clickableItems = this.displayedItems.slice(this.firstClickableIndex, this.firstClickableIndex + this.maxClickableItems);
    galleryRef.load(this.clickableItems);
  }

  getItems(tag: string): void {
    this.firstClickableIndex = 0;
    this.lastItemIndex = this.itemsPerScroll;
    this.allItems = this.galleryService.getGalleryItems(tag);
    this.displayedItems = this.allItems.slice(0, this.lastItemIndex);

    const galleryRef = this.gallery.ref(this.galleryId);
    galleryRef.load(this.displayedItems);
  }
}
