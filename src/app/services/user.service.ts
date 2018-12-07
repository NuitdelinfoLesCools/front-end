import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Alert } from '../models/Alert';
import { Mission } from '../models/Mission';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private http: HttpClient) { }

  register(email: string, username: string, password: string): Observable<any> {
    return this.http.post<any>(`${environment.apiBaseUrl}/user/signup`, { email, username, password });
  }

  getAlerts(): Observable<Alert[]> {
    return this.http.get<any>(`${environment.apiBaseUrl}/alert/`).pipe(map(resp => resp.data));
  }

  getMissions(): Observable<Mission[]> {
    return this.http.get<any>(`${environment.apiBaseUrl}/mission/`).pipe(map(resp => resp.data));
  }

  updatePos(lat, lon): Observable<any> {
    return this.http.put<any>(`${environment.apiBaseUrl}/user/pos`, { lat, lon });
  }

  getPos(): Observable<any[]> {
    return this.http.get<any>(`${environment.apiBaseUrl}/user/pos/`).pipe(map(resp => resp.data));
  }
}
