import { Component,OnInit } from '@angular/core';
import { Busqueda } from 'src/app/interfaces/busqueda';
import { BusquedaService } from 'src/app/servicios/busqueda.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit{

  resultado!: Busqueda | null;
  txtBusqueda!: string;

  constructor(private srvBusqueda:BusquedaService) {}

  ngOnInit() {
    // this.srvBusqueda.busqueda('mérida').then((response) => {
    //   //alert("Total:" + response.total_count);
    //   this.resultado = response;
    // }, (error) => {
    //   alert("Error: " + error.statusText);
    // });// cierre consulta 1

  }

  busqueda =() =>{
    this.srvBusqueda.busqueda(this.txtBusqueda).then((response) => {
      //alert("Total:" + response.total_count);
      this.resultado = response;
    }, (error) => {
      alert("Error: " + error.statusText);
    });// cierre consulta 1

  }

  

}
