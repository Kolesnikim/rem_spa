import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimetableModule } from './timetable/timetable.module';
import { GalleryModule } from './gallery/gallery.module';
import { MainPageModule } from './main-page/main-page.module';
import { NotFoundComponent } from './not-found.component';
 

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    TimetableModule,
    GalleryModule,
    MainPageModule
  ],
  exports: [
    NotFoundComponent
  ]
})
export class SharedModule { }
