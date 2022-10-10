import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GestorPeliculasComponent } from './components/gestor-peliculas/gestor-peliculas.component';
import { FormularioNuevaPeliculaComponent } from './components/formulario-nueva-pelicula/formulario-nueva-pelicula.component';
import { FichaPeliculaComponent } from './components/ficha-pelicula/ficha-pelicula.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    GestorPeliculasComponent,
    FormularioNuevaPeliculaComponent,
    FichaPeliculaComponent,
    DetallePeliculaComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
