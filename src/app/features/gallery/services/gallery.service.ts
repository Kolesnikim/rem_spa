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
    {
      data: {
        src: 'https://gdb.rferl.org/A01A6C5E-F928-4F1C-B130-F1E2FFD683F5_w1597_n_r1_st.jpg',
        thumb: 'https://gdb.rferl.org/A01A6C5E-F928-4F1C-B130-F1E2FFD683F5_w1597_n_r1_st.jpg',
      },
      type: 'image'
    },
    {
      data: {
        src: 'https://gdb.rferl.org/13BCED5F-4D8D-4E9C-8853-D627F790FD10_w1597_n_r0_st.jpg',
        thumb: 'https://gdb.rferl.org/13BCED5F-4D8D-4E9C-8853-D627F790FD10_w1597_n_r0_st.jpg',
      },
      type: 'image'
    },
    {
      data: {
        src: 'https://faunistics.com/wp-content/uploads/2019/02/1.jpg',
        thumb: 'https://faunistics.com/wp-content/uploads/2019/02/1.jpg',
      },
      type: 'image'
    },
    {
      data: {
        src: 'https://faunistics.com/wp-content/uploads/2019/02/4.jpg',
        thumb: 'https://faunistics.com/wp-content/uploads/2019/02/4.jpg',
      },
      type: 'image'
    },
    {
      data: {
        src: 'https://faunistics.com/wp-content/uploads/2019/02/6.jpg',
        thumb: 'https://faunistics.com/wp-content/uploads/2019/02/6.jpg',
      },
      type: 'image'
    },
    {
      data: {
        src: 'https://faunistics.com/wp-content/uploads/2019/02/10.jpg',
        thumb: 'https://faunistics.com/wp-content/uploads/2019/02/10.jpg',
      },
      type: 'image'
    },
    {
      data: {
        src: 'https://faunistics.com/wp-content/uploads/2019/02/13.jpg',
        thumb: 'https://faunistics.com/wp-content/uploads/2019/02/13.jpg',
      },
      type: 'image'
    },
    {
      data: {
        src: 'https://faunistics.com/wp-content/uploads/2019/02/16.jpg',
        thumb: 'https://faunistics.com/wp-content/uploads/2019/02/16.jpg',
      },
      type: 'image'
    },
    {
      data: {
        src: 'https://cs6.pikabu.ru/post_img/big/2015/05/04/6/1430726907_1263345098.jpg',
        thumb: 'https://cs6.pikabu.ru/post_img/big/2015/05/04/6/1430726907_1263345098.jpg',
      },
      type: 'image'
    },
    {
      data: {
        src: 'https://finland.fi/wp-content/uploads/2016/03/Amurin-leopardi-700x467.jpg',
        thumb: 'https://finland.fi/wp-content/uploads/2016/03/Amurin-leopardi-700x467.jpg',
      },
      type: 'image'
    },
    {
      data: {
        src: 'http://howdoright.ru/wp-content/uploads/2017/07/27adbcfc4dce4601585d97539acf2422.jpg',
        thumb: 'http://howdoright.ru/wp-content/uploads/2017/07/27adbcfc4dce4601585d97539acf2422.jpg',
      },
      type: 'image'
    },
    {
      data: {
        src: 'https://kaktakto.com/wp-content/uploads/2019/04/0528-6926-9230-1145-1024x682.jpg',
        thumb: 'https://kaktakto.com/wp-content/uploads/2019/04/0528-6926-9230-1145-1024x682.jpg',
      },
      type: 'image'
    },
    {
      data: {
        src: 'https://kaktakto.com/wp-content/uploads/2019/04/photo_197914-1024x683.jpg',
        thumb: 'https://kaktakto.com/wp-content/uploads/2019/04/photo_197914-1024x683.jpg',
      },
      type: 'image'
    },
    {
      data: {
        src: 'https://kaktakto.com/wp-content/uploads/2019/04/polet-berkuta-v-nebe-1024x577.jpg',
        thumb: 'https://kaktakto.com/wp-content/uploads/2019/04/polet-berkuta-v-nebe-1024x577.jpg',
      },
      type: 'image'
    },
    {
      data: {
        src: 'https://kaktakto.com/wp-content/uploads/2019/04/1200px-manul_close-1024x682.jpg',
        thumb: 'https://kaktakto.com/wp-content/uploads/2019/04/1200px-manul_close-1024x682.jpg',
      },
      type: 'image'
    },
  ];

  getGalleryItems(): GalleryItem[] {
    for (let i = 0; i < 2; i++){
      this.items = this.items.concat(this.items);
    }
    return this.items;
  }
}
