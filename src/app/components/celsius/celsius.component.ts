import { Component, OnInit } from '@angular/core';
import { ConverterService } from 'src/app/services/converter.service';

@Component({
  selector: 'app-celsius',
  templateUrl: './celsius.component.html',
  styleUrls: ['./celsius.component.scss']
})
export class CelsiusComponent implements OnInit {

  value: number = 0;

  constructor(private convServ: ConverterService) {
    convServ.value.subscribe({
      next: v => this.value = v,
      error: err => console.log(err)
    })
   }

  ngOnInit(): void {
  }

  valueChanged():void{
    this.convServ.value.next(this.value);
  }

}
