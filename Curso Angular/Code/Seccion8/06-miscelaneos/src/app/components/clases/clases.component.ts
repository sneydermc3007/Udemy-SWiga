import { Component, OnInit } from '@angular/core';

interface  Propiedades {
  danger: boolean;
}

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [
  ]
})
export class ClasesComponent implements OnInit {

  alerta:string = "alert-danger";
  loading:boolean = false;

  propiedades:Propiedades = {
    danger: false
  }

  constructor() { }

  ngOnInit(): void {
  }

  ejecutar(){
    this.loading = true;

    setTimeout(() => this.loading = false, 3000)
    console.log('Hi')
  }

}
