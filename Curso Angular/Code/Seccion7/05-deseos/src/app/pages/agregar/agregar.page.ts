import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaItem } from 'src/app/models/lista-item.model';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: Lista;
  nombreItem = '';

  constructor( private deseos: DeseosService,
                  private router: ActivatedRoute) { 


      const listaId = this.router.snapshot.paramMap.get('listaId');

      this.lista = this.deseos.obtenerLista( listaId )
  }

  ngOnInit() {
  }

  agregarItem() {

    if ( this.nombreItem.length === 0 ) {
      return;
    }

    const nuevoItem = new ListaItem( this.nombreItem );
    this.lista.items.push( nuevoItem );

    this.nombreItem = '';
    this.deseos.guardarStorage();
  }

  cambioCheck(item: ListaItem){

    const pendientes = this.lista.items.filter(
          itemData => itemData.completado == false
        ).length;

    if( pendientes == 0){
      this.lista.terminadaEn = new Date();
      this.lista.terminada = true;

    }else  {
      this.lista.terminadaEn = null;
      this.lista.terminada = false;
    }

    this.deseos.guardarStorage();

    console.log(this.deseos.listas);
    
  }

  borrar(i: number){
    this.lista.items.splice(i, 1);
    this.deseos.guardarStorage();
  }

}
