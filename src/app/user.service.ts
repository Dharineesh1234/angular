import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://localhost:7205/api/Movie/GetAll';

  constructor(private http: HttpClient) { }

  getData(movieId?: number, pageNumber: number = 1, pageSize: number = 10): Observable<any> {
    let params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());

    if (movieId) {
      params = params.set('movieId', movieId.toString());
    }

    console.log(`Requesting data with params: ${params.toString()}`);
    return this.http.get<any>(this.apiUrl, { params });
  }
}
