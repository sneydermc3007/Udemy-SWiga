import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarteleraResponse, Movie } from '../interface/cartelera-response';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MovieResponse } from '../interface/movie-response';
import { Cast, CreditsReponse } from '../interface/credits-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private baseUrl: string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando: boolean = false;

  constructor( private http: HttpClient ) { }

  get params() {
    return {
      api_key: '486ca6a5292c78054c793539c07b72a8',
      language: 'es-ES',
      page: this.carteleraPage.toString()
    }
  }

  resetCarteleraPage(){
    this.carteleraPage = 1;
  }

  getCartelera():Observable<Movie[]> {

    console.log('Cargando API')

    if (this.cargando){
      return of([]);
    }

    this.cargando = true;

    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing`,{
      params: this.params
    }).pipe(
      map( (resp) => resp.results ),
      tap( () =>  {
        this.carteleraPage += 1;
        this.cargando = false;
      })
    )
  }

  buscarPeliculas(texto: string):Observable<Movie[]>{

    const params = {...this.params, page: '1', query: texto}

    return this.http.get<CarteleraResponse>(`${this.baseUrl}/search/movie`, {
      params: params
    }).pipe(
      map( resp => resp.results)
    )

  }

  getPeliculaDetalle(id: string) {
    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/${ id }`, {
      params: this.params
    }).pipe(
      catchError(err => of(null))
    )
    
  }

  getCast(id: string):Observable<Cast[]> {
    return this.http.get<CreditsReponse>(`${this.baseUrl}/movie/${ id }/credits`, {
      params: this.params
    }).pipe(
      map( resp => resp.cast ),
      catchError(err => of([]))
    )
    
  }





}
