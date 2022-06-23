import { Component, OnInit } from '@angular/core';
import { ConverterService } from 'src/app/services/converter.service';

@Component({
  selector: 'app-fahrenheit',
  templateUrl: './fahrenheit.component.html',
  styleUrls: ['./fahrenheit.component.scss']
})
export class FahrenheitComponent implements OnInit {

  // value: number = 0;

  constructor(public convServ: ConverterService) {
    // convServ.fahrenheitValue().subscribe({
    //   next: v => this.value = v,
    //   error: err => console.log(err)
    // })
  }

  ngOnInit(): void {
  }

  // valueChanged(): void {
  //   this.convServ.nextFahrenheit(this.value);
  // }

}
