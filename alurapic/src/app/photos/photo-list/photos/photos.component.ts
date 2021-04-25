import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Photo } from './../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: Photo[] = [];
  rows : any[];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.photos) {
      this.rows = this.groupPhotosPerRow(this.photos);
    }
  }

  groupPhotosPerRow(photos: Photo[]) {
    const rows = [];
    const totalPhotosPerRow = 3;

    for (let index = 0; index < photos.length; index += totalPhotosPerRow) {
      rows.push(photos.slice(index, index + totalPhotosPerRow));
    }

    return rows;
  }

}
