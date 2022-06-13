import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/interface/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  @HostListener('window:scroll', ['$event'])
  onScroll(){
    const pos = (document.body.scrollTop || document.documentElement.scrollTop) + 3000;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if ( pos > max ) {
      // TODO: llamar el servicio
      if ( this._peliculasService.cargando ) { return; }

      this._peliculasService.getCartelera().subscribe( movies => {
        this.movies.push(...movies );
      });
    }
  }

  
  public movies: Movie[] = [];
  public moviesSlideshow: Movie[] = [];

  constructor(private _peliculasService: PeliculasService){

  }

  ngOnInit(): void {

    this._peliculasService.getCartelera()
      .subscribe( movies => {
        //console.log(resp.results);
        this.movies = movies;
        this.moviesSlideshow = movies;
      })
  }

  ngOnDestroy(): void {
    this._peliculasService.resetCarteleraPage();
  }

}
