import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interface/cartelera-response';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {

  @Input() movies: Movie[];

  
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.movies)
  }
  onMovieClick( pelicula: Movie ) {
    this.router.navigate(['/pelicula', pelicula.id ]);
  }
}
