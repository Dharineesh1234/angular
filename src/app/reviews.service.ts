import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  private baseUrl = 'https://localhost:7205/api/Movie'; // Update with your API base URL

  constructor(private http: HttpClient) { }

  addReview(review: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/Create`, review);
}
}