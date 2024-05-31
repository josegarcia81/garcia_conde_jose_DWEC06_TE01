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
    // Validacion del formulario //
    if (this.contactoUsuario.nombre !="" && 
        this.contactoUsuario.apellido !="" &&
        this.contactoUsuario.correoElectronico !="" &&
        this.contactoUsuario.mensaje !=""){
          console.log("Formulario enviado")
          console.log(this.contactoUsuario)
          alert("Formulario enviado con exito!")
        }
    else {
      alert("Rellene todos los campos del formulario!")
    }
  }

}
