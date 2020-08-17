import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HOST } from '../shared/var.constant';

@Injectable({
  providedIn: 'root',
})
export class CurrecyConversionService {
  URL_BACKEND = HOST;
  constructor(private http: HttpClient) {}

  // URL TO GET CURRENCYCONVERSION
  private URL_CURRENCY_CONVERSION = 'https://api.exchangeratesapi.io';

  getCurrencyConversion(dateString): Observable<any> {
    return this.http.get(`${this.URL_CURRENCY_CONVERSION}/${dateString}`);
  }

  getValuesOfChange(): Observable<any> {
    return this.http.get(`${this.URL_BACKEND}/value`);
  }
  storeValuesInDB(valueCurrency): Observable<any> {
    return this.http.post(`${this.URL_BACKEND}/value`, valueCurrency);
  }
  hitWebHook(valueCurrency): Observable<any> {
    return this.http.post(
      'https://webhook.site/bb5a6abe-1a7b-452e-86c8-40b2bbba00b7',
      valueCurrency
    );
  }
}
