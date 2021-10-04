import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReportList } from '../pages/Report';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  getAllReport(): Observable<ReportList>{
    return this.http.get<ReportList>(`${env.BASE_URL}/report`);
  }

  getReportById(id: any): Observable<ReportList>{
    return this.http.get<ReportList>(`${env.BASE_URL}/report/details/${id}`);
  }
}
