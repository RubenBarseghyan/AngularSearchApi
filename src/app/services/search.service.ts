import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private  readonly apiUrl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private readonly http: HttpClient) {}

  search(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?q=${query}`);
  }
}
