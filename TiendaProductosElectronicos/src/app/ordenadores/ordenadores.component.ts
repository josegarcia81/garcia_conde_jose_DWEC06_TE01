import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'; 

@Component({
  selector: 'app-ordenadores',
  templateUrl: './ordenadores.component.html',
  styleUrl: './ordenadores.component.scss'
})
export class OrdenadoresComponent {

  private _route : ActivatedRoute;
  private _router : Router;
  public nombreUrl : string = "";

  constructor (_route : ActivatedRoute, _router : Router){
  this._route =_route;
  this._router =_router;
  }

  ngOnInit():void{
    this._route.params.subscribe((params:Params)=>{
      console.log(params);
      this.nombreUrl = params["categoria"]// nombre que le he dado al dato que se va a recibir en app.routings.ts
      // de aqui llamaremos a la consulta y le pasaremos el dato de categoria para que nos muestre solo los móviles
    })
  }
}
