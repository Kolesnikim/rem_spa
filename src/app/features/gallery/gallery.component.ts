import { Component, OnInit } from '@angular/core';
import { GalleryService } from './services/gallery.service';
import { Gallery, GalleryItem } from 'ng-gallery';
import { GalleryTag } from './models/tag.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  galleryTags: GalleryTag[];
  activeTag: GalleryTag;
  displayedItems: GalleryItem[];
  clickableItems: GalleryItem[];
  allItems: GalleryItem[];
  maxClickableItems = 100;
  itemsPerScroll = 25;
  galleryId = 'my-gallery';
  firstClickableIndex = 0;
  lastItemIndex: number = this.itemsPerScroll;

  constructor(private galleryService: GalleryService, public gallery: Gallery) { }

  ngOnInit(): void {
    this.galleryService.getGalleryTags().subscribe((tags: GalleryTag[]) => {
      this.galleryTags = tags;
      if (this.galleryTags.length > 0) {
        this.getItems(this.galleryTags[0]);
      }
    });
  }

  /**
   * Функция вызова бесконечного скролла
   */
  onScroll(): void {
    this.galleryService.getGalleryItems(this.activeTag, this.allItems.length, this.itemsPerScroll)
      .subscribe((items: GalleryItem[]) => {
        this.allItems.push(...items);

        this.lastItemIndex += items.length;
        if (this.lastItemIndex > this.allItems.length) {
          this.lastItemIndex = this.allItems.length;
        }
        this.displayedItems = this.allItems.slice(0, this.lastItemIndex);
      });
  }

  /**
   * Функция вызова увеличенного изображения(карусель изображений- загружаем только по 100 изображений )
   * @param id галлереи
   */
  onImageClick(id: number): void {
    this.firstClickableIndex = id - this.maxClickableItems / 2;
    if (this.firstClickableIndex < 0) {
      this.firstClickableIndex = 0;
    }

    const galleryRef = this.gallery.ref(this.galleryId);
    this.clickableItems = this.displayedItems.slice(this.firstClickableIndex, this.firstClickableIndex + this.maxClickableItems);
    galleryRef.load(this.clickableItems);
  }

  /**
   * Функция получения массива изображений
   * @param tag название тега
   */
  getItems(tag: GalleryTag): void {
    if (this.activeTag === tag) {
      return;
    }
    this.activeTag = tag;
    this.firstClickableIndex = 0;
    this.galleryService.getGalleryItems(tag, 0, this.itemsPerScroll).subscribe((items: GalleryItem[]) => {
      this.allItems = items;
      this.lastItemIndex = items.length;
      this.displayedItems = this.allItems.slice(0, this.lastItemIndex);

      const galleryRef = this.gallery.ref(this.galleryId);
      galleryRef.load(this.displayedItems);
    });
  }

}
