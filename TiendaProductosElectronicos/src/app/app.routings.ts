import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Route } from "@angular/router";
// COMPONENTES //
import { InicioComponent } from "./inicio/inicio.component";
import { MovilesComponent } from "./moviles/moviles.component";
import { OrdenadoresComponent } from "./ordenadores/ordenadores.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { AdminComponent } from "./admin/admin.component";

const appRoutes : Routes = [
    {path:"", component:InicioComponent},
    {path:"moviles", component:MovilesComponent},
    {path:"moviles/:categoria", component:MovilesComponent},
    {path:"ordenadores", component:OrdenadoresComponent},
    {path:"ordenadores/:categoria", component:OrdenadoresComponent},
    {path:"contacto", component:ContactoComponent},
    {path:"admin", component:AdminComponent},
    {path:"**", component:InicioComponent}
]

export const appRoutingProviders : any [] = [];
export const routing : ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);