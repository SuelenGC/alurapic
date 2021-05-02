import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Photo } from './photo';

const API = 'http://localhost:3001';

@Injectable({providedIn: 'root'})
export class PhotoService {
  constructor(private http: HttpClient) {}

  listFromUser(userName: string) {
    return this.http
      .get<Photo[]>(API + '/user/' + userName + '/photos');
  }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams()
      .append('_page', page.toString());

    return this.http
      .get<Photo[]>(API + '/user/' + userName + '/photos', { params } );
  }
}
