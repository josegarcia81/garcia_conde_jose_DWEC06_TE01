import { Injectable } from "@angular/core";// en app.module importar tambien y en su import
import { HttpClient, HttpHeaders } from "@angular/common/http";// en app.module importar tambien y en su import
import { Observable } from "rxjs";
import { Producto } from "../models/Producto";

@Injectable()// Patron singelton 
export class ConsultasService{

    //public productos : Array<Producto>;
    public url : string;

    constructor(public _http : HttpClient/*, productos : Array<Producto>*/){
        this.url = "https://dummyjson.com/products/"
        //this.productos = productos;
    }

    getProducts() : Observable<any>{
        return this._http.get(this.url)

    }

    create(producto : Producto) : Observable<any>{
        return this._http.post(this.url+"add",producto)
    }

    readCategory(category : string) : Observable<any>{
        return this._http.get(this.url+category)
    }

    update(idProducto : string, data: any) : Observable<any>{
        return this._http.put(this.url+idProducto,data)
    }

    delete(idProducto : string) : Observable<any>{
        return this._http.delete(this.url+idProducto)
    }
}