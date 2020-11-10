import { Injectable } from '@angular/core';

export class GalleryItem{
  public path: string;
  public date: string;

  constructor(path: string, date: string){
    this.path = path;
    this.date = date;
  }
}

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  constructor() { }

  gallaryComponents: GalleryItem[] = [
    new GalleryItem('https://aif-s3.aif.ru/images/017/228/1cf7688469151c3b4d943b257a2e6194.jpg', '01/01/01'),
    new GalleryItem('http://uploads.gazeta-moy-rayon-donskoy.ru/2020/01/pyls_AGvacinacii9.jpg', '01/01/01'),
    new GalleryItem('https://24.kz/media/k2/items/cache/a47cd529d658a888ca2450f808014c9a_XL.jpg', '01/01/01'),
    new GalleryItem('https://www.asi.org.ru/wp-content/uploads/2019/06/domashnie-zhivotnye-788x454.jpg', ''),
    new GalleryItem('https://static.mk.ru/upload/entities/2019/06/28/11/articles/detailPicture/84/24/4c/92/d37dbc4d9ddf010e01e8736a6d68b5cf.jpg', ''),
    new GalleryItem('https://i.timeout.ru/pix/resize/515/773/750x485.jpeg', ''),
    new GalleryItem('https://www.sobaka.ru/images/image/00/79/24/47/_normal.jpg', ''),
    new GalleryItem('https://cdni.rt.com/russian/images/2020.04/article/5e871e4e02e8bd78530e15cc.jpg', ''),
    new GalleryItem('http://www.animalsprotectiontribune.ru/kkm2.jpg', ''),
    new GalleryItem('http://www.vokrugsveta.ru/img/bx/medialibrary/520/520486fb59d0a0d79bcfc19f9f0abab4.jpg', ''),
  ];

  getGalleryItems(): GalleryItem[] {
    return this.gallaryComponents;
  }
}
