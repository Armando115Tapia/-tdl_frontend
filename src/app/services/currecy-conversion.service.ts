import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrecyConversionService {
  constructor(private http: HttpClient) {}

  // URL TO GET CURRENCYCONVERSION
  private URL_CURRENCY_CONVERSION = 'https://api.exchangeratesapi.io';

  getCurrencyConversion(dateString): Observable<any> {
    return this.http.get(`${this.URL_CURRENCY_CONVERSION}/${dateString}`);
  }
}
