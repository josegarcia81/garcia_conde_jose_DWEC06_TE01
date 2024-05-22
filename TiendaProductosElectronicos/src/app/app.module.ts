import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { MovilesComponent } from './moviles/moviles.component';
import { OrdenadoresComponent } from './ordenadores/ordenadores.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AdminComponent } from './admin/admin.component';
import { appRoutingProviders, routing } from './app.routings';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MovilesComponent,
    OrdenadoresComponent,
    ContactoComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [
    provideClientHydration(),
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
