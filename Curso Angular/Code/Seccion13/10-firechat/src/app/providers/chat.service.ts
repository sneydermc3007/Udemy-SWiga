import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Mensaje } from '../interface/mensaje.interface'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';


@Injectable()
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>;


  public chats: Mensaje[] = [];
  public usuario: any = {};

  constructor(private asf: AngularFirestore,
                public auth: AngularFireAuth ) { 

    this.auth.authState.subscribe(user => {

      console.log('Estado del usuario: ', user)

      if(!user){
        return;
      }

      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;
    });

  }

  login( proveedor: string ) {

    if( proveedor === 'google' ){
      this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }else{
      this.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
    }

  }

  logout() {
    this.usuario = {};
    this.auth.signOut();
  }

  cargarMensajes(){

    this.itemsCollection = this.asf.collection<Mensaje>('chats',  
                                ref => ref.orderBy('fecha','desc').limit(5));
    
    return this.itemsCollection.valueChanges().pipe(
      map((mensajes: Mensaje[]) => {
        console.log(mensajes);

        this.chats = [];

        for (let mensaje of mensajes ){
          this.chats.unshift(mensaje);
        }
        // this.chats = mensajes
        return this.chats;
      })
    )
  }

  // Falta el UID (id)
  agregarMensaje(texto: string) {
    let mensaje: Mensaje = {
      nombre: this.usuario.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.usuario.uid
    }

    return this.itemsCollection.add(mensaje)
  }

}
