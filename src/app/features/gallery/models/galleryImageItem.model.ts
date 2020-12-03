import { GalleryItem } from 'ng-gallery';
import { ImageData } from './interfaces/imageData.interface';

/**
 * Изображение галереи
 */
export class GalleryImageItem implements GalleryItem {
    public data: ImageData;
    public type = 'image';

    constructor(url: string, smallUrl: string){
        this.data = {
            src: url,
            thumb: smallUrl,
        };
    }
}
