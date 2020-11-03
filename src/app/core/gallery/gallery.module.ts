import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';



@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule
  ],
  bootstrap: [
    GalleryComponent
  ],
  exports: [
    GalleryComponent
  ]
})
export class GalleryModule { }
