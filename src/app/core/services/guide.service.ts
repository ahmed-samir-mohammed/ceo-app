import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CeoList, AddNewCeo, UpdateCeo } from '../pages/guide';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GuideService {

  constructor(private http: HttpClient) { }

  getAllCeo(): Observable<CeoList> {
    // let params = new HttpParams();
    // params = params.append('pageNo', parameters.pageNo);
    // params = params.append('pageSize', parameters.pageSize);
    // params = params.append('searchText', parameters.searchText);
    return this.http.get<CeoList>(`${env.BASE_URL}/ceo`/*, { params: params }*/);
  }

  getCeoById(id: any): Observable<CeoList> {
    return this.http.get<CeoList>(`${env.BASE_URL}/ceo/details/${id}`);
  }

  addNewCeo(body: any): Observable<AddNewCeo> {
    return this.http.post<AddNewCeo>(`${env.BASE_URL}/ceo/addrequest`, body)
  }

  updateNewCeo(body: any): Observable<UpdateCeo> {
    return this.http.post<UpdateCeo>(`${env.BASE_URL}/ceo/updaterequest`, body)
  }
}
