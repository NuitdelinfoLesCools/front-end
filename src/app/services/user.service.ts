import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private http: HttpClient) { }

  register(email: string, username: string, password: string): Observable<any> {
    return this.http.post<any>(`${environment.apiBaseUrl}/user/signup`, { email, username, password });
  }
}
