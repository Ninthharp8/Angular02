import { Component, OnInit } from '@angular/core';
import { BusquedaService } from './servicios/busqueda.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'angular01';
  

  constructor(private servicioB: BusquedaService ){ }

  ngOnInit() {
    this.servicioB.busqueda('mérida').then((response) => {
      //alert("Total:" + response.total_count);
    }, (error) => {
      alert("Error: " + error.statusText);
    });// cierre consulta 1

  } // cierre de ngOninit

} // Cierre de la clase AppComponent
