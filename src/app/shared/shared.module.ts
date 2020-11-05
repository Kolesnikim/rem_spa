import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimetableModule } from './timetable/timetable.module';
import { GalleryModule } from './gallery/gallery.module';
import { MainPageModule } from './main-page/main-page.module';
 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TimetableModule,
    GalleryModule,
    MainPageModule
  ]
})
export class SharedModule { }
