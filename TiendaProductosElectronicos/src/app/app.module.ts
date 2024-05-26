import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

// Import para las consultas //
import { HttpClientModule } from '@angular/common/http';

// Imports de los Componentes //
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { MovilesComponent } from './moviles/moviles.component';
import { OrdenadoresComponent } from './ordenadores/ordenadores.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AdminComponent } from './admin/admin.component';

// Imports para que funcionenen los links del menu //
import { appRoutingProviders, routing } from './app.routings';
import { AppRoutingModule } from './app-routing.module';

// Imports para los formularios //
import { FormsModule } from '@angular/forms';

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
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
