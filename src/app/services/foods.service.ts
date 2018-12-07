import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Food } from '../models/Food';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FoodsService {

  constructor(private http: HttpClient) { }

  getFoods(): Observable<Food[]> {
    return this.http.get<any>(`${environment.apiBaseUrl}/food/`).pipe(map(resp => resp.data));
  }
}
