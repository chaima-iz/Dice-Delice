import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  addReservation(reservationData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/reservation`, reservationData);
  }

  listReservations(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/reservations');
  }
  

}
