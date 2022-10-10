import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-gestor-peliculas',
  templateUrl: './gestor-peliculas.component.html',
  styleUrls: ['./gestor-peliculas.component.css']
})
export class GestorPeliculasComponent implements OnInit {

  public peliculas:Pelicula[]|any;
  public detalleVisible:boolean=false;
  public peliculaDetallada:Pelicula|any;

  constructor() { 
    this.peliculas = [
      {titulo:"Tiburón",director:"Spielberg",imagen:"https://i.etsystatic.com/19389619/r/il/b4518b/2598217185/il_fullxfull.2598217185_8bx4.jpg"},
      {titulo:"Alien",director:"Ridley",imagen:"https://i.ebayimg.com/images/g/WYAAAOSwpXpZyodo/s-l500.jpg"},
      {titulo:"El exorcista",director:"William Friedkin",imagen:"https://m.media-amazon.com/images/I/71lXNBrOLbL._AC_SY606_.jpg"},
      {titulo:"Tiburón",director:"Spielberg",imagen:"https://i.etsystatic.com/19389619/r/il/b4518b/2598217185/il_fullxfull.2598217185_8bx4.jpg"},
      {titulo:"Alien",director:"Ridley",imagen:"https://i.ebayimg.com/images/g/WYAAAOSwpXpZyodo/s-l500.jpg"},
      {titulo:"El exorcista",director:"William Friedkin",imagen:"https://m.media-amazon.com/images/I/71lXNBrOLbL._AC_SY606_.jpg"},
      {titulo:"Tiburón",director:"Spielberg",imagen:"https://i.etsystatic.com/19389619/r/il/b4518b/2598217185/il_fullxfull.2598217185_8bx4.jpg"},
      {titulo:"Alien",director:"Ridley",imagen:"https://i.ebayimg.com/images/g/WYAAAOSwpXpZyodo/s-l500.jpg"},
      {titulo:"El exorcista",director:"William Friedkin",imagen:"https://m.media-amazon.com/images/I/71lXNBrOLbL._AC_SY606_.jpg"}
    ];
  }

  ngOnInit(): void {
  }

  public eliminarPelicula(pelicula:Pelicula) {
    console.error("Eliminado película..." + pelicula.titulo);
    let index = this.peliculas.indexOf(pelicula, 0);
    if (index > -1) {
      this.peliculas.splice(index, 1);
    }
  }

  mostrarDetalle(pelicula:Pelicula){
    console.warn("Mostrando detalle..." + pelicula.titulo);
    this.peliculaDetallada=pelicula;
    this.detalleVisible=true;
  }

  cerrar(){
    this.detalleVisible=false;
  }

}
