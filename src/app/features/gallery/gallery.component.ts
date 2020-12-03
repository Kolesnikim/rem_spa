import { Component, OnInit } from '@angular/core';
import { GalleryService } from './services/gallery.service';
import { Gallery, GalleryItem } from 'ng-gallery';
import { IGalleryTag } from './models/interfaces/IGalleryTag';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  private maxCarouselItems = 100;
  private itemsPerScroll = 25;
  public galleryTags: IGalleryTag[];
  public activeTag: IGalleryTag;
  public displayedItems: GalleryItem[];
  public galleryId = 'my-gallery';
  public firstCarouselItemIndex = 0;

  constructor(private galleryService: GalleryService, public gallery: Gallery) { }

  ngOnInit(): void {
    this.galleryService.getGalleryTags().subscribe((tags: IGalleryTag[]) => {
      this.galleryTags = tags;
      if (this.galleryTags.length > 0) {
        this.onTagChange(this.galleryTags[0]);
      }
    });
  }

  /**
   * Вызов бесконечного скролла
   */
  public onScroll(): void {
    this.galleryService.getGalleryItems(this.activeTag, this.displayedItems.length, this.itemsPerScroll)
      .subscribe((items: GalleryItem[]) => {
        this.displayedItems.push(...items);
      });
  }

  /**
   * Вызов увеличенного изображения
   * @param id изображения
   */
  public onImageClick(id: number): void {
    this.firstCarouselItemIndex = id - this.maxCarouselItems / 2;
    if (this.firstCarouselItemIndex < 0) {
      this.firstCarouselItemIndex = 0;
    }
    // в карусель изображений загружаем только по 100 изображений, иначе подвисает и тормозит
    const galleryRef = this.gallery.ref(this.galleryId);
    const carouselItems = this.displayedItems.slice(this.firstCarouselItemIndex, this.firstCarouselItemIndex + this.maxCarouselItems);
    galleryRef.load(carouselItems);
  }

  /**
   * Обработать смену тэга
   * @param tag название тега
   */
  public onTagChange(tag: IGalleryTag): void {
    if (this.activeTag === tag) {
      return;
    }
    this.activeTag = tag;
    this.galleryService.getGalleryItems(tag, 0, this.itemsPerScroll).subscribe((items: GalleryItem[]) => {
      this.displayedItems = items;
    });
  }
}
