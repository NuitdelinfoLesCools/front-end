import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipment } from '../models/Equipment';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(private http: HttpClient) { }

  getEquipments(): Observable<Equipment[]> {
    return this.http.get<any>(`${environment.apiBaseUrl}/equipment/`).pipe(map(resp => resp.data));
  }
}
