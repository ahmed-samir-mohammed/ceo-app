import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CeoList } from '../pages/guide';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GuideService {

  constructor(private http: HttpClient) { }

  getAllCeo(): Observable<CeoList>{
    return this.http.get<CeoList>(`${env.BASE_URL}/ceo`);
  }

  getCeoById(id: any): Observable<CeoList>{
    return this.http.get<CeoList>(`${env.BASE_URL}/ceo/details/${id}`);
  }
}
