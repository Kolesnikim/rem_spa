import { GalleryItem } from 'ng-gallery';

interface IImageData {
    src: string;
    thumb: string;
}

export class GalleryImageItem implements GalleryItem {
    data: IImageData;
    type = 'image';

    constructor(url: string, smallUrl: string){
        this.data = {
            src: url,
            thumb: smallUrl,
        };
    }
}
