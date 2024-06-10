import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketBookInterface } from './booktickets/booktickets.component';

@Injectable({
  providedIn: 'root'
})
export class BookticketsService {

  private baseUrl = 'https://localhost:7205/api/Movie'; // Update with your API base URL

  constructor(private http: HttpClient) { }

  book(book: TicketBookInterface): Observable<any> {
    return this.http.post(`${this.baseUrl}/CreateBooking`, book);
}
}