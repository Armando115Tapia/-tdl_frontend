import { Component, OnInit } from '@angular/core';
import { TempHumService } from '../../services/temp-hum.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.component.html',
  styleUrls: ['./ejercicio2.component.css'],
})
export class Ejercicio2Component implements OnInit {
  valuesTemHum = [];
  constructor(private tempHumService: TempHumService) {}

  ngOnInit(): void {
    this.getAllValues();
  }
  getAllValues(): void {
    this.tempHumService
      .getValuesHumTemp()
      .pipe(
        tap((data) => {
          this.valuesTemHum = data.values;
        })
      )
      .subscribe();
    console.log('Get values');
  }
}
