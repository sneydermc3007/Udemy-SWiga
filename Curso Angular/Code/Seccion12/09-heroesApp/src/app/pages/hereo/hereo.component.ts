import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HereoModel } from 'src/app/models/hereo.model';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-hereo',
  templateUrl: './hereo.component.html',
  styleUrls: ['./hereo.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: HereoModel = new HereoModel();

  constructor(private _heroesService: HeroesService,
                private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if(id !== 'nuevo'){
      this._heroesService.getHeroe(id).subscribe(
        (result: HereoModel) => {
          this.heroe = result;
          this.heroe.id = id;
        }
      )
    }

  }

  guardar(form: NgForm){

    if(form.invalid){
      console.log('Formulario no valido')
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando informacion',
      icon: 'info',
      allowOutsideClick: false,
    });
    Swal.showLoading();

    let peticion: Observable<any>

    if(this.heroe.id){
      peticion = this._heroesService.actualizarHeroe(this.heroe);

    } else {
      peticion = this._heroesService.crearHeroe(this.heroe);
    }

    peticion.subscribe(result => {
      Swal.fire({
        title: this.heroe.nombre,
        text: 'Se actualizo correctamente',
        icon: 'success'
      });
    })


  }

}
