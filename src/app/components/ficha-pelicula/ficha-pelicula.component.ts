import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-ficha-pelicula',
  templateUrl: './ficha-pelicula.component.html',
  styleUrls: ['./ficha-pelicula.component.css']
})
export class FichaPeliculaComponent implements OnInit {

  @Input() public pelicula:Pelicula|any;
  @Output() public eventoBorrado:EventEmitter<Pelicula>; 
  @Output() public eventoDetalle:EventEmitter<Pelicula>; 
  @Input() public gestionado:boolean=false;
  constructor() { 
    this.eventoBorrado = new EventEmitter<Pelicula>();
    this.eventoDetalle = new EventEmitter<Pelicula>();
  }

  ngOnInit(): void {
  }

  eliminarPelicula(){
    console.error("Eliminado pelicula..." + this.pelicula.titulo);
    this.eventoBorrado.emit(this.pelicula);
  }

  mostrarDetalle(){
    console.warn("Mostrando detalle pelicula..." + this.pelicula.titulo);
    this.eventoDetalle.emit(this.pelicula);
  }

}
