import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CeoList, AddNewCeo } from '../pages/guide';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GuideService {

  constructor(private http: HttpClient) { }

  getAllCeo(): Observable<CeoList> {
    return this.http.get<CeoList>(`${env.BASE_URL}/ceo`);
  }

  addNewCeo(body: any): Observable<AddNewCeo> {
    return this.http.post<AddNewCeo>(`${env.BASE_URL}/addrequest`, body)
  }

  updateNewCeo(body: any): Observable<AddNewCeo> {
    return this.http.post<AddNewCeo>(`${env.BASE_URL}/updaterequest`, body)
  }

  getCeoById(id: any): Observable<CeoList> {
    return this.http.get<CeoList>(`${env.BASE_URL}/ceo/details/${id}`);
  }
}
