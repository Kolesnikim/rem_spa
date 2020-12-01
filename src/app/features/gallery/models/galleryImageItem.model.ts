import { GalleryItem } from 'ng-gallery';
import { IImageData } from './interfaces/iImageData.interface';

/**
 * Изображение галереи
 */
export class GalleryImageItem implements GalleryItem {
    public data: IImageData;
    public type = 'image';

    constructor(url: string, smallUrl: string){
        this.data = {
            src: url,
            thumb: smallUrl,
        };
    }
}
