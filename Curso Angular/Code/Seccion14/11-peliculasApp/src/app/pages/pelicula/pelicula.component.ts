import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cast } from 'src/app/interface/credits-response';
import { MovieResponse } from 'src/app/interface/movie-response';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { combineLatest } from 'rxjs'

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public pelicula: MovieResponse;
  public cast: Cast[] = [];

  constructor( private activeRoute: ActivatedRoute,
                  private _peliculasService: PeliculasService,
                  private router: Router,
                  private location: Location) { }

  ngOnInit(): void {

    const id = this.activeRoute.snapshot.params['id'];

    combineLatest([

      this._peliculasService.getPeliculaDetalle( id ),
      this._peliculasService.getCast( id )

    ]).subscribe( ( [pelicula, cast] ) => {
      
      if ( !pelicula ) {
        this.router.navigateByUrl('/home');
        return;
      }

      this.pelicula = pelicula;  
      this.cast = cast.filter( actor => actor.profile_path !== null );
    });

    // this._peliculasService.getPeliculaDetalle( id ).subscribe( movie => {
    //   if ( !movie ) {
    //     this.router.navigateByUrl('/home');
    //     return;
    //   }
    //   this.pelicula = movie;
    // });

    // this._peliculasService.getCast( id ).subscribe( cast => {
    //   console.log(cast)
    //   this.cast = cast.filter( actor => actor.profile_path !== null );
    // });

  }

  onRegresar(){
    console.log('Adios')
    this.location.back()
  }

}
