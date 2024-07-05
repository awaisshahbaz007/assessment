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
  photos: Observable<any[]> | null = null;
  constructor(private photoService: PhotoService, private router: Router) {}
  ngOnInit(): void {
    this.photos = this.photoService.getPhotos();
  }

  navigateToDetail(id: number) {
    this.router.navigate(['/photos', id]);
  }
}
