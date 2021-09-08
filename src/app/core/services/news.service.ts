import { Injectable } from '@angular/core';
import { NewsList } from '../pages/news';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  NEWS_API: string = "http://localhost:3000/newsPage";

  constructor(private http: HttpClient) { }

  getAllNews(): Observable<NewsList> {
    return this.http.get<NewsList>(this.NEWS_API);
  }

  getNewsById(id: number): Observable<NewsList> {
    return this.http.get<NewsList>(this.NEWS_API + "/" + id)
  }
}
