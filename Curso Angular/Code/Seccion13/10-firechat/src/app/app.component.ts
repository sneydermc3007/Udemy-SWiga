import { Component } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ChatService } from '../app/providers/chat.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firechat';
  chats: Observable<any[]>;

  constructor( public _cs: ChatService ) { }
}
