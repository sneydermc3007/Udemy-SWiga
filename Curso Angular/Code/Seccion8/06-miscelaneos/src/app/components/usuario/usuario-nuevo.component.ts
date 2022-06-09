import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute ) {
    if ( this.activatedRoute.parent ) {
      this.activatedRoute.parent.params.subscribe( params => {
        console.log('Ruta HIJA Usuario nuevo')
        console.log( params );
      } )
    }
}

  ngOnInit(): void {
  }

}
