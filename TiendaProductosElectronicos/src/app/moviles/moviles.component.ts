import { Component, OnInit } from '@angular/core';
// Imports para poder recibir parametros por la url //
import { ActivatedRoute, Params, Router } from '@angular/router'; 
// Imports para la consulta //
import { Producto } from '../models/Producto'; 
import { ConsultasService } from '../services/consultas.service';

@Component({
  selector: 'app-moviles',
  templateUrl: './moviles.component.html',
  styleUrl: './moviles.component.scss',
  providers:[ConsultasService] // importante poner sino no funciona
})
export class MovilesComponent implements OnInit{

  // Variables para el paso de parametros por url //
  private _route : ActivatedRoute;
  private _router : Router;
  private _consultaServicio : ConsultasService

  public nombreUrl : string = "";

  // Variable para la consulta //
  public productos : Array<any> = [];
  public moviles_result : Array<Producto> = [];

  constructor (_route : ActivatedRoute, _router : Router, _consultaServicio : ConsultasService){
    this._route =_route;
    this._router =_router;
    this._consultaServicio = _consultaServicio;
  }

  ngOnInit():void{
    // recepcion de parametros por url //
    this._route.params.subscribe((params:Params)=>{
      console.log(params);
      this.nombreUrl = "category/"+params["categoria"]// nombre que le he dado al dato que se va a recibir en app.routings.ts
      // de aqui llamaremos a la consulta y le pasaremos el dato de categoria para que nos muestre solo los móviles
      // Consulta para traer los datos de la categoria moviles solo //
      this._consultaServicio.readCategory(this.nombreUrl).subscribe(
        result =>{
          console.log(result);
          this.productos = result.products;
          console.log(this.productos);
          // Mapeado para solo recoger los datos para cada producto //
          this.moviles_result = this.productos.map(function(element){
            return new Producto(element.id, element.title, element.description, element.price, element.images);
          });
          console.log(this.moviles_result);

        },
        error => {
          console.log(<any>error);
          alert("Error en la carga de datos")
        }
      );
    })
  }
}
