import { Component } from '@angular/core';
import { ReviewsService } from '../reviews.service';
import { NgForm } from '@angular/forms';
export interface ReviewAddingInterface{
   ReviewId:number,
   MovieId:number,
   ReviewerName:string,
   ReviewText:string,
   Rating:number,

}

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})

export class AddreviewComponent {
  ReviewAddingInterface:ReviewAddingInterface={
    ReviewId: 0,
    MovieId: 0,
    ReviewerName: '',
    ReviewText: '',
    Rating: 0
  }
  showSuccessModal: boolean = false; // Variable to control the visibility of the success modal

  constructor(private movieService: ReviewsService) { }

  onSubmit(reviewForm: NgForm): void {
    if (reviewForm.valid) {
      this.movieService.addReview(this.ReviewAddingInterface).subscribe(
        response => {
          console.log('Review added successfully:', response);
          this.showSuccessModal = true; // Show modal on successful review addition
        },
        error => {
          console.error('Failed to add review:', error);
        }
      );
    }
  }

  // Method to close the success modal
  closeSuccessModal(): void {
    this.showSuccessModal = false;
  }
}
