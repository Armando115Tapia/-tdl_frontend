import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HOST } from '../shared/var.constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TempHumService {
  url = HOST;
  constructor(private http: HttpClient) {}

  getValuesHumTemp(): Observable<any> {
    return this.http.get(`${this.url}/tempHum`);
  }
}
