import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums/1/photos';
  private selectedPhotoDetail: any;

  constructor(private http: HttpClient) {}

  getPhotos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Returned error ${error.status}, ` +
        `Error: ${error.error}`);
    }
    return throwError('Something wrong, please try again later.');
  }
  
  setSelectedPhotoDetail(item: any) {
    this.selectedPhotoDetail = item;
  }
  getSelectedPhotoDetail() {
    return this.selectedPhotoDetail;
  }

}
