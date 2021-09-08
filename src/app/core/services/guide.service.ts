import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GuideList } from '../pages/guide';

@Injectable({
  providedIn: 'root'
})
export class GuideService {

  GUIDE_API: string = "http://localhost:3100/guideList";

  constructor(private http: HttpClient) { }

  getAllGuide(): Observable<GuideList>{
    return this.http.get<GuideList>(this.GUIDE_API);
  }
}
