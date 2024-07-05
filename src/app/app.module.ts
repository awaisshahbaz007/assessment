import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForDirective } from './directives/for.directive';
import { PhotosComponent } from './components/photos/photos.component';
import { PhotoDetailComponent } from './components/photo-detail/photo-detail.component';

@NgModule({
  declarations: [
    AppComponent, 
    ForDirective,
    PhotosComponent,
    PhotoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
