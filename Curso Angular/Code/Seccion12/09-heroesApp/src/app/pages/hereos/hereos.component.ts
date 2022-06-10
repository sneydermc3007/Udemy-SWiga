import { Component, OnInit } from '@angular/core';
import { HereoModel } from 'src/app/models/hereo.model';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hereos',
  templateUrl: './hereos.component.html',
  styleUrls: ['./hereos.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HereoModel[] = [];
  cargando = false;

  constructor(private _heroesService: HeroesService) { }

  ngOnInit() {

    this.cargando = true;

    this._heroesService.getHeroes().subscribe( 
      result => {
        this.heroes = result;
        this.cargando = false;
      })
  }

  borrarHeroe(heroe: HereoModel, index: number) {

    Swal.fire({
      title: '¿Esta seguro?',
      text: `Esta seguro que desea borrar a ${heroe.nombre}`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then((response) => {

      if(response.value){
        this.heroes.splice(index, 1)

        this._heroesService.borrarHeroe(heroe.id).subscribe();
      }
    })
  }

}
