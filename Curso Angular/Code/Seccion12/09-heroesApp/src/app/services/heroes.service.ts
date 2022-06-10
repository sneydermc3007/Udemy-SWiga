import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HereoModel } from '../models/hereo.model';
import { map, delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = 'https://login-app-1e365-default-rtdb.firebaseio.com'

  constructor( private http: HttpClient) { }


  crearHeroe(heroe: HereoModel){

    return this.http.post(`${this.url}/heroes.json`, heroe).pipe(
      map( (resp: any) => {
        heroe.id = resp.name;
        return heroe;
      } )
    )

  }

  actualizarHeroe(heroe: HereoModel){

    const heroeTemp = {
      ...heroe
    };

    delete heroeTemp.id

    return this.http.put(`${this.url}/heroes/${heroe.id}.json`, heroeTemp).pipe()
  }

  borrarHeroe( id: string ) {

    return this.http.delete(`${ this.url }/heroes/${ id }.json`);

  }

  getHeroe( id: string ) {

    return this.http.get(`${ this.url }/heroes/${ id }.json`);

  }

  getHeroes() {
    return this.http.get(`${ this.url }/heroes.json`)
            .pipe(
              map( this.crearArreglo ),
              delay(3000)
            );
  }

  private crearArreglo( heroesObj: object ) {

    const heroes: HereoModel[] = [];

    Object.keys( heroesObj ).forEach( key => {

      const heroe: HereoModel = heroesObj[key];
      heroe.id = key;

      heroes.push( heroe );
    });

    if( heroesObj === null ){ return []; }


    return heroes;

  }

}
