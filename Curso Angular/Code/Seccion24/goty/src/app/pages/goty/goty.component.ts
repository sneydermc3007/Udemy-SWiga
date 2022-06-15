import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/interfaces/interfaces';
import { GameService } from '../../services/game.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos: Game[] = [];

  constructor(private _gameService: GameService) { }

  ngOnInit(): void {

    this._gameService.getNominados()
    .subscribe(resp_games => {
      console.log(resp_games)
      this.juegos = resp_games
    })

  }

  votarJuego(juego: Game){
    this._gameService.votarJuego(juego.id).subscribe(
      (resp:any) => {
        console.log(resp)

        if(resp.ok){
          Swal.fire({
            title: 'Gracias',
            text: resp.mensaje,
            icon: 'success',
          })
        } else {
          Swal.fire({
            title: 'Error!',
            text: resp.mensaje,
            icon: 'error',
          })
        }

      }
    )
  }



}
