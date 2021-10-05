import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceList } from '../pages/service';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getAllService(): Observable<ServiceList> {
    return this.http.get<ServiceList>(`${env.BASE_URL}/service`);
  }

  getServiceById(id: unknown): Observable<ServiceList> {
    return this.http.get<ServiceList>(`${env.BASE_URL}/service/view/${id}`)
  }
}
