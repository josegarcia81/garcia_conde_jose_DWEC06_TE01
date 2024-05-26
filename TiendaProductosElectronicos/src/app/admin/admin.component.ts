import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/Producto'; 
import { ConsultasService } from '../services/consultas.service';
import { MovilesComponent } from '../moviles/moviles.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  providers:[ConsultasService] // importante poner sino no funciona
})
export class AdminComponent{

  public productos : Array<any> = [];
  public mapped_result : Array<Producto> = [];
  

  constructor(private _consultaServicio : ConsultasService){}

  ngOnInit() : void{
    this._consultaServicio.getProducts().subscribe(
      result =>{
        console.log(result);
        this.productos = result.products;
        console.log(this.productos);
        this.mapped_result = this.productos.map(function(element){
          return new Producto(element.id, element.title, element.description, element.price, element.images);
        });
        console.log(this.mapped_result);
        // this.array_result = mapped_result;
      },
      error => {
        console.log(<any>error);
        alert("Error en la carga de datos")
      }
    );
  }

  create(){
    let dataCreate : any = {
      "title": "iPone 10",
      "description": "Hola",
      "price": 1000
     }

    this._consultaServicio.create(dataCreate).subscribe({
      next : data =>{
        console.log("Create",data)
        if (data.id != ""){
          alert("Producto Creado Correctamente");
        } else {
          alert("Problema al Crear el Producto");
        }
      },
      error : error =>{
        console.log(<any>error);
        alert("Error al crear el producto")
      }

    });
  }

  read(){
    this._consultaServicio.getProducts().subscribe({

    });
  }

  update(){
    let id :string = "1";
    let dataSend : any = {
      "title": "iPone 10",
      "description": "Hola",
      "price": 1000
     }
    this._consultaServicio.update(id,dataSend).subscribe({
      next : data =>{
        console.log("update",data)
        if (data.title == dataSend.title){
          alert("Producto Actualizado");
        } else {
          alert("Problema al Actualizar el Producto");
        }
      },
      error : error =>{
        console.log(<any>error);
        alert("Problema al Actualizar el Producto");
      }

    });
  }

  delete(){
    let id :string = "1";
    
    this._consultaServicio.delete(id).subscribe({
      next : data =>{
        console.log("Delete",data);
        if (data.isDeleted){
          alert("Producto Borrado");
        } else {
          alert("Problema al Borrado del Producto");
        }
      },
      error : error =>{
        console.log(<any>error);
      }
    });
  }

  search(){
    
  }
}
