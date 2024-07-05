import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IfDirective } from 'src/app/directives/if.directive';
import { PhotoService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-photo-detail',
  standalone: true,
  imports: [CommonModule, IfDirective],
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent {
  selectedphotoDetail: any;
  constructor(private photoService: PhotoService, private router: Router) {}

  ngOnInit(): void {
    this.selectedphotoDetail = this.photoService.getSelectedPhotoDetail();
  }

  navigateToMain() {
    this.router.navigate(['/photos']);
  }
  
}
