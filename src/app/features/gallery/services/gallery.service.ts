import { Injectable } from '@angular/core';
import { Gallery, GalleryItem } from 'ng-gallery';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  constructor() { }

  items: GalleryItem[] = [
    {
      data: {
        src: 'https://aif-s3.aif.ru/images/017/228/1cf7688469151c3b4d943b257a2e6194.jpg',
        thumb: 'https://aif-s3.aif.ru/images/017/228/1cf7688469151c3b4d943b257a2e6194.jpg',
      },
      type: 'image'
    },
    {
      data: {
        src: 'http://uploads.gazeta-moy-rayon-donskoy.ru/2020/01/pyls_AGvacinacii9.jpg',
        thumb: 'http://uploads.gazeta-moy-rayon-donskoy.ru/2020/01/pyls_AGvacinacii9.jpg',
      },
      type: 'image'
    },
    {
      data: {
        src: 'https://24.kz/media/k2/items/cache/a47cd529d658a888ca2450f808014c9a_XL.jpg',
        thumb: 'https://24.kz/media/k2/items/cache/a47cd529d658a888ca2450f808014c9a_XL.jpg',
      },
      type: 'image'
    },
    {
      data: {
        src: 'https://www.asi.org.ru/wp-content/uploads/2019/06/domashnie-zhivotnye-788x454.jpg',
        thumb: 'https://www.asi.org.ru/wp-content/uploads/2019/06/domashnie-zhivotnye-788x454.jpg',
      },
      type: 'image'
    },
    {
      data: {
        src: 'https://static.mk.ru/upload/entities/2019/06/28/11/articles/detailPicture/84/24/4c/92/d37dbc4d9ddf010e01e8736a6d68b5cf.jpg',
        thumb: 'https://static.mk.ru/upload/entities/2019/06/28/11/articles/detailPicture/84/24/4c/92/d37dbc4d9ddf010e01e8736a6d68b5cf.jpg',
      },
      type: 'image'
    },
    {
      data: {
        src: 'https://i.timeout.ru/pix/resize/515/773/750x485.jpeg',
        thumb: 'https://i.timeout.ru/pix/resize/515/773/750x485.jpeg',
      },
      type: 'image'
    },
    {
      data: {
        src: 'https://www.sobaka.ru/images/image/00/79/24/47/_normal.jpg',
        thumb: 'https://www.sobaka.ru/images/image/00/79/24/47/_normal.jpg',
      },
      type: 'image'
    },
    {
      data: {
        src: 'https://cdni.rt.com/russian/images/2020.04/article/5e871e4e02e8bd78530e15cc.jpg',
        thumb: 'https://cdni.rt.com/russian/images/2020.04/article/5e871e4e02e8bd78530e15cc.jpg',
      },
      type: 'image'
    },
    {
      data: {
        src: 'http://www.animalsprotectiontribune.ru/kkm2.jpg',
        thumb: 'http://www.animalsprotectiontribune.ru/kkm2.jpg',
      },
      type: 'image'
    },
    {
      data: {
        src: 'http://www.vokrugsveta.ru/img/bx/medialibrary/520/520486fb59d0a0d79bcfc19f9f0abab4.jpg',
        thumb: 'http://www.vokrugsveta.ru/img/bx/medialibrary/520/520486fb59d0a0d79bcfc19f9f0abab4.jpg',
      },
      type: 'image'
    },
  ];

  getGalleryItems(): GalleryItem[] {
    return this.items;
  }
}
