import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, pluck } from 'rxjs/operators';
import { Game } from '../../interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  juegos: any[] = [];
  
  constructor( private db: AngularFirestore ) { 

  }

  ngOnInit(): void {

    // this.db.collection('goty').valueChanges()
    // .subscribe(juegos => {
    //   // console.log(juegos)
    //   this.juegos = juegos
      
    // })


    this.db.collection<Game>('goty').valueChanges()
    .pipe( 
      map( (resp: any) => resp.map( ({ name, votos}) => ({name, value: votos }) ) )
     )
    .subscribe>(resp => {
          console.log(resp)
    })

  }

}
