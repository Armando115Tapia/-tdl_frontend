import { Component, OnInit } from '@angular/core';
import { CurrecyConversionService } from '../../services/currecy-conversion.service';
import { tap } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css'],
})
export class Ejercicio1Component implements OnInit {
  date = new Date(new Date().getTime());
  currencyValue = '';
  constructor(private currecyConversionService: CurrecyConversionService) {}

  ngOnInit(): void {
    this.getCurrencyConversion(this.dateToString(this.date));
  }

  getCurrencyConversion(date): void {
    this.currecyConversionService
      .getCurrencyConversion(date)
      .pipe(
        tap(({ rates }) => {
          this.currencyValue = rates.USD;
        })
      )
      .subscribe();
  }

  handleDOBChange(dateString): void {
    console.log(dateString);
    const arrDate = dateString.split('/');
    const year = arrDate[2];
    const month = arrDate[0];
    const day = arrDate[1];

    const dateSting = year + '-' + month + '-' + day;
    this.date = new Date(year, month, day);

    this.getCurrencyConversion(dateSting);
  }

  dateToString(date): string {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  }

  storeCurrentyConversion(): void {
    console.log(`Guardando: ${this.date} y ${this.currencyValue}`);
  }
}
