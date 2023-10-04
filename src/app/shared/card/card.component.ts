import { Component, Input } from '@angular/core';
import { Usuarios } from 'src/app/home/user/user-table/user-table.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone:true

})
export class CardComponent {
  @Input() element: Usuarios; // Asegúrate de tener esta entrada
constructor(){
  this.element={id: 0,
    name: "",
    created_at: "",
    actived: false, 
  img:""}
}
}
