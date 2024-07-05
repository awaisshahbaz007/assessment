import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PhotoService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent {
  photos: Observable<any[]> = new Observable<any[]>();

  constructor(private photoService: PhotoService, private router: Router) {}

  ngOnInit(): void {
    this.photos = this.photoService.getPhotos();
    this.photos.subscribe(
      photos => {
        console.log('Received photos:', photos);
      },
      error => {
        console.error('Error fetching photos:', error);
      }
    );
  }

  navigateToDetail(id: number) {
    this.router.navigate(['/photos', id]);
  }
}
