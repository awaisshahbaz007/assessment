import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ForDirective } from 'src/app/directives/for.directive';
import { IfDirective } from 'src/app/directives/if.directive';
import { PhotoService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule, ForDirective, IfDirective],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent {
  photos: Observable<any[]> | null = null;
  constructor(private photoService: PhotoService, private router: Router) {}
  ngOnInit(): void {
    this.photos = this.photoService.getPhotos();
  }

  navigateToDetail(id: number, detail: any) {
    this.router.navigate(['/photos', id]);
    this.photoService.setSelectedPhotoDetail(detail);
  }
}
