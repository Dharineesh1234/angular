import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { MovieReviewsComponent } from './movie-reviews.component';

@NgModule({
  declarations: [MovieReviewsComponent],
  imports: [
    CommonModule,
    FormsModule  // Add FormsModule to imports array
  ],
  exports: [MovieReviewsComponent]
})
export class MovieReviewsModule { }
