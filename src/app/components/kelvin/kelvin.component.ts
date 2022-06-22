import { Component, OnInit } from '@angular/core';
import { ConverterService } from 'src/app/services/converter.service';

@Component({
  selector: 'app-kelvin',
  templateUrl: './kelvin.component.html',
  styleUrls: ['./kelvin.component.scss']
})
export class KelvinComponent implements OnInit {

  value: number = 0;

  constructor(private convServ: ConverterService) {
    convServ.kelvinValue().subscribe({
      next: v => this.value = v,
      error: err => console.log(err)
    })
   }

  ngOnInit(): void {
  }

  valueChanged(): void {
    this.convServ.nextKelvin(this.value);
  }

}
