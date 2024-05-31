import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-movie-reviews',
  templateUrl: './movie-reviews.component.html',
  styleUrls: ['./movie-reviews.component.css']
})
export class MovieReviewsComponent implements OnInit {
  reviews: any[] = [];
  movieId?: number;
  pageNumber: number = 1;
  pageSize: number = 10;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getReviews();
  }

  getReviews(): void {
    this.userService.getData(this.movieId, this.pageNumber, this.pageSize).subscribe(
      data => {
        console.log('Data received:', data);
        this.reviews = data;
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching data', error);
        alert('An error occurred while fetching data. Please try again later.');
      }
    );
  }

  nextPage(): void {
    this.pageNumber++;
    this.getReviews();
  }

  previousPage(): void {
    if (this.pageNumber > 1) {
      this.pageNumber--;
      this.getReviews();
    }
  }
}
