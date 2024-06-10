import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface MovieReview {
  reviewId: number;
  reviewerName: string;
  reviewText: string;
  rating: number;
}

@Component({
  selector: 'app-movie-reviews',
  templateUrl: './movie-reviews.component.html',
  styleUrls: ['./movie-reviews.component.css']
})
export class MovieReviewsComponent implements OnInit {
  reviews: MovieReview[] = [];
  selectedReview: MovieReview | null = null;
  isEditModalOpen: boolean = false;
  pageNumber: number = 1;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getReviews();
  }

  getReviews() {
    this.http.get<MovieReview[]>('https://localhost:7205/api/Movie/GetAll')
      .subscribe(reviews => this.reviews = reviews);
  }

  openEditModal(review: MovieReview) {
    this.selectedReview = { ...review };
    this.isEditModalOpen = true;
  }

  closeEditModal() {
    this.isEditModalOpen = false;
    this.selectedReview = null;
  }

  updateReview() {
    if (this.selectedReview) {
      this.http.put(`https://localhost:7205/api/Movie/update`, this.selectedReview)
        .subscribe(updatedReview => {
          // Update the local list of reviews
          const index = this.reviews.findIndex(r => r.reviewId === this.selectedReview?.reviewId);
          if (index !== -1) {
            this.reviews[index] = this.selectedReview!;
          }
          this.closeEditModal();
        });
    }
  }
  deleteReview(reviewId: number) {
    if (confirm('Are you sure you want to delete this review?')) {
      this.http.delete(`https://localhost:7205/api/Movie/${reviewId}`)
        .subscribe(() => {
          // Remove the deleted review from the local list
          this.reviews = this.reviews.filter(review => review.reviewId !== reviewId);
        }, error => {
          console.error('Failed to delete review:', error);
        });
    }
  }

  previousPage() {
    if (this.pageNumber > 1) {
      this.pageNumber--;
      this.getReviews();
    }
  }

  nextPage() {
    this.pageNumber++;
    this.getReviews();
  }
}
