import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  value: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  fahrenheitValue(){
    return this.value.pipe(
      map(v => (v * 9/5) + 32),
      map(v => this.round(v))
    )
  }

  kelvinValue() {
    return this.value.pipe(
      map(v => v + 273.15),
      map(v => this.round(v))
    )
  }

  nextFahrenheit(fValue:number){
    const newValue = (fValue - 32) * 5/9;
    const rounded = this.round(newValue)
    this.value.next(rounded);
  }

  nextKelvin(kValue:number){
    const newValue = kValue - 273.15;
    const rounded = this.round(newValue)
    this.value.next(rounded);
  }

  round(value:number){
    return parseFloat(value.toFixed(3));
  }

  round2(value: number) {
    const v1 = value * 1000;
    const v2 = Math.round(v1);
    const v3 = v2 / 1000;
    return v3;
  }
}
