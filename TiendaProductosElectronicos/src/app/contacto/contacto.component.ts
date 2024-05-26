import { Component } from '@angular/core';
import { ContactoUsuario } from '../models/ContactoUsuario';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {

  public contactoUsuario : ContactoUsuario;

  constructor(){
    this.contactoUsuario = new ContactoUsuario("","","","");
  }

  onSubmit() : void{
    console.log("Formulario enviado")
    console.log(this.contactoUsuario)

  }

}
