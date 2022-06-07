import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/hereoes.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = [];
  termino:string | undefined;

  constructor( private activatedRoute: ActivatedRoute,
                private _heroesService: HeroesService,
                private _router: Router) {

  }

  ngOnInit(){

    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino'])
      console.log(this.heroes)
    })
  }

  verHeroe(idx: number){
    console.log(idx)
    this._router.navigate(['/heroe',idx])
  }

}
