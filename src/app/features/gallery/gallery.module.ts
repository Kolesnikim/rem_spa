import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { GalleryModule as GalleryPlagin } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    GalleryPlagin,
    LightboxModule.withConfig({}),
    InfiniteScrollModule

  ]
})
export class GalleryModule { }
