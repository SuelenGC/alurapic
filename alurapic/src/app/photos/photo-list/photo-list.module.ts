import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoModule } from './../photo/photo.module';
import { FilterByDescription } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoListComponent } from './photo-list.component';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescription
  ],
  imports: [
    CommonModule,
    PhotoModule
  ]
})
export class PhotoListModule {

}