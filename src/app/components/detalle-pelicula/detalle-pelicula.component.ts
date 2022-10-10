import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() public peliculaDetallada:Pelicula|any;
  @Output() public eventoCerrar:EventEmitter<any>;

  constructor() { 
    this.eventoCerrar=new EventEmitter<any>();
  }

  ngOnInit(): void {
  }

  public cerrar():void{
    console.error("CERRANDO...(PENDIENTE)");
    this.eventoCerrar.emit();
  }
}
